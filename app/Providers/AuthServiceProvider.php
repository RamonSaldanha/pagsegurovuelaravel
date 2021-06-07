<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

use Carbon\Carbon;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
       
        Gate::define('check-license', function ($user) {
            $license_start_date = new Carbon($user->license_date_confirmation);
            $license_end_date = new Carbon($user->license_date_confirmation);
            $license_end_date->addDays($user->license_period);
            $license_end_date->addDay();
            
            // se a data for anterior ao final da licença, retorna false 
            return Carbon::now()->lessThanOrEqualTo($license_end_date)
                            ? true
                            : false;
        });
    }
}
