<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question_bank extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_text',
        'answer_value',
        'subject_id',

    ];

    // Relación de pertenencia
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    // Relación muchos a muchos con Usuario a través de Resultado
    public function usuarios()
    {
        return $this->belongsToMany(User::class, 'Resurt', 'question_bank_id', 'user_id');
    }

}
