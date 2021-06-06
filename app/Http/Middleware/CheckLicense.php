<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;

class CheckLicense
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $license_start_date = new Carbon($request->user()->license_date_confirmation);
            
        $license_end_date = new Carbon($request->user()->license_date_confirmation);
        $license_end_date->addDays($request->user()->license_period);
        $license_end_date->addDay();

        if(Carbon::now()->lessThanOrEqualTo($license_end_date)) 
            return $next($request);
        
        return response()->json([
                'license_expired' => 'License has expired'
            ], 401);
    }
}
