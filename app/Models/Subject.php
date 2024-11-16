<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_name',
    ];

        // Relación uno a muchos
        public function questions()
        {
            return $this->hasMany(QuestionsBank::class);
        }
}
