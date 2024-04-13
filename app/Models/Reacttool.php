<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reacttool extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'link',
        'category',
        'iconTitle',
        'screenshotTitle',
        'description',
    ];
}
