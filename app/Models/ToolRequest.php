<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ToolRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'url',
        'reason',
        'status'
    ];

    // public function toolRequest(): HasOne
    // {
    //     return $this->hasOne(ToolRequest::class);
    // }
}
