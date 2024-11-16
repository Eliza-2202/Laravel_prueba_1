<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('education_institutions', function (Blueprint $table) {
            $table->id();
            $table->string('education_institutions_name');
            $table->integer('code_institute'); ## se comunica con user
            $table->string('region');
            $table->string('district');
            $table->string('contact_information');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education_institutions');
    }
};
