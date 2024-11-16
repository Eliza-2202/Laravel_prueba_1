<?php

namespace App\Http\Controllers\Api\Controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class SubjectController extends Controller
{
    

    public function index_subject()
    {
        $user = auth()->user();

        // Ejemplo en tu controlador
        $subjects = Subject::all();

        $users = User::where('id','!=', $user->id)->get();
        return Inertia::render('Teacher/Subject',['user' => $user,'users' => $users, 'subjects'=>$subjects]);

    }

    public function createSubject(Request $request)
    {
        return Inertia::render('Teacher/CreateSubject');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeSubject(Request $request)
    {
        $request->validate([
            'subject_name' => 'required',
        ]);

        $user = Subject::create(['subject_name' => $request->subject_name]);

        return to_route('subject.index');
    }


    public function loadEditFromSubject($subject_id){
        $user = auth()->user();
        $subjectDetails = Subject::find($subject_id);

        return Inertia::render('Teacher/SubjectEditForm', ['user'=>$user, 'subjectDetails'=>$subjectDetails]);
    }


    public function editSubject(Request $request){
        $request->validate([
                'subject_name' => 'required',
            ]);

            $subject = Subject::find($request->id);
            $subject->update([
                'subject_name' => $request->subject_name,
            ]);
    
        return to_route('subject.index');
            
    }


    public function destroySubject($subject_id)
    {
        $subject=Subject::find($subject_id);
        $subject->delete();
        return to_route('subject.index');

    }
}
