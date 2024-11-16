<?php

namespace App\Http\Controllers\Api\Controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Question_bank;
use App\Models\Subject;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class Question_bankController extends Controller
{
    
    public function index_question(){
        $user = auth()->user();
        //$questions = Question_bank::all();
        // Ejemplo en tu controlador
        $questions = Question_bank::with('subject')->get();

        $users = User::where('id','!=', $user->id)->get();
        return Inertia::render('Teacher/Questions',['user' => $user,'users' => $users, 'questions'=>$questions]);
       
    }

    public function createQuestion(Request $request)
    {
        $subjects = Subject::all();

        // Pasar subjects como una propiedad a la vista
        return Inertia::render('Teacher/CreateQuestion', [
            'subjects' => $subjects
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeQuestion(Request $request)
    {
        $request->validate([
            'question_text'=> 'required',
            'answer_value'=> 'required',
            'subject_id'=> 'required',
        ]);

        
        $user = Question_bank::create([
            'question_text' => $request->question_text,
            'answer_value' => $request->answer_value,
            'subject_id' => $request->subject_id,
        ]);

        return to_route('question.index');
    }


    public function loadEditFromQuestion($question_id){
        $user = auth()->user();
        $subjects = Subject::all();
        $questionDetails = Question_bank::find($question_id);

        return Inertia::render('Teacher/QuestionEditForm', ['user'=>$user, 'question'=>$questionDetails, 'subjects'=> $subjects]);
    }


    public function editQuestion(Request $request){
        $request->validate([
                'question_text'=> 'required',
                'answer_value'=> 'required',
                'subject_id'=> 'required',
            ]);

            $question = Question_bank::find($request->id);
            $question->update([
                'question_text' => $request->question_text,
                'answer_value' => $request->answer_value,
                'subject_id' => $request->subject_id,
            ]);
    
        return to_route('question.index');
            
    }


    public function destroyQuestion($question_id)
    {
        $question=Question_bank::find($question_id);
        $question->delete();
        return to_route('question.index');

    }
}
