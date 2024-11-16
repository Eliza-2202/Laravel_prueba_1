<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Resurt extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'question_bank_id',
        'answer',
        'correct',


    ];
    // Relación de pertenencia
    public function question()
    {
        return $this->belongsTo(QuestionsBank::class, 'question_bank_id');
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'user_id');
    }
}
