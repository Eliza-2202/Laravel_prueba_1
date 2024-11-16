<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\Controller\Question_bankController;
use App\Http\Controllers\Api\Controller\SubjectController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//rutas
Route::get('/users',[UserController::class,'loadUsers'])->name('users.index');
Route::post('/edit/user',[UserController::class,'editUser'])->name('users.update');

Route::get('/edit/user/{user_id}',[UserController::class,'loadEditFrom'])->name('users.edit');
Route::get('/delete/user/{user_id}',[UserController::class,'deleteUser'])->name('users.delete');

//crear preguntas
Route::get('/questions',[Question_bankController::class,'index_question'])->name('question.index');
Route::put('/edit/question',[Question_bankController::class,'editQuestion'])->name('question.update');

Route::get('/edit/question/{question_id}',[Question_bankController::class,'loadEditFromQuestion'])->name('question.edit');
Route::get('/delete/question/{question_id}',[Question_bankController::class,'destroyQuestion'])->name('question.delete');

Route::get('/create/question', [Question_bankController::class, 'createQuestion'])->name('question.create');
Route::post('/create/question/new', [Question_bankController::class, 'storeQuestion'])->name('question.store');



//crear cursos
Route::get('/subjects',[SubjectController::class,'index_subject'])->name('subject.index');
Route::post('/edit/subject',[SubjectController::class,'editSubject'])->name('subject.update');

Route::get('/edit/subject/{subject_id}',[SubjectController::class,'loadEditFromSubject'])->name('subject.edit');
Route::get('/delete/subject/{subject_id}',[SubjectController::class,'destroySubject'])->name('subject.delete');

Route::get('/subject/create', [SubjectController::class, 'createSubject'])->name('subject.create');
Route::post('/subject/create/new', [SubjectController::class, 'storeSubject'])->name('subject.store');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
