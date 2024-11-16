<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function loadUsers(){
        $user = auth()->user();
        $users = User::where('id', '!=', $user->id)
        ->where('user_type', 0)
        ->get();

        return Inertia::render('Users/Users',['user' => $user,'users' => $users]);
    }


    public function loadEditFrom($user_id){
        $user = auth()->user();
        $userDetails = User::find($user_id);

        return Inertia::render('Users/EditForm', ['user'=>$user, 'user_dateil'=>$userDetails]);
    }


    public function editUser(Request $request){
        $request->validate([
                'name' => 'required',
                'email' => 'required',
            ]);

            $user = User::find($request->id);
            $user->update([
                'name' => $request->name,
                'email' => $request->email,

            ]);
    
            return to_route('users.index');
    }

    public function deleteUser($user_id){
        $user=User::find($user_id);
        $user->delete();
        return to_route('users.index');
    } 
}
