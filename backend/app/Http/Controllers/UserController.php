<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function show(Request $request)
    {
        return response()->json($request->user());
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['errors' => ['email' => 'Email Does not  Exist']], 400);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['errors' => ['password' => 'Incorrect Password']], 400);
        }
        $token = $user->createToken('token');

        return response()->json(['data' => $user, 'token' => $token->plainTextToken]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' =>'required',
            'email' =>'required|email|unique:users,email',
            'password' =>'required|confirmed'
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json('created successfully');
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

    }
}
