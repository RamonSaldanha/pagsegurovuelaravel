<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use Gate;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        // dd(Carbon::now('America/Sao_Paulo'));

        $request->validate([
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();
        
        Auth::login($user);

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeeks(1);
        
        $token->save();

        $user['access_token'] = $tokenResult->accessToken;
        $user['token_type'] = 'Bearer';
        $user['expires_at'] = Carbon::parse( $tokenResult->token->expires_at )->toDateTimeString();

        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
    }

    public function login(Request $request)
    {
        
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);

        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
            
        $user = $request->user();
                
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        $user['access_token'] = $tokenResult->accessToken;
        $user['token_type'] = 'Bearer';
        $user['expires_at'] = Carbon::parse( $tokenResult->token->expires_at )->toDateTimeString();
        return response()->json($user);
    }
  

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
 
    public function user(Request $request)
    {
        $user = $request->user();

        if( Gate::denies ('check-license') ) {
            $user['license_expired'] = 'License has expired';
        }

        return response()->json($user);
    }
}
