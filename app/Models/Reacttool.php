<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Reacttool extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'title',
        'slug',
        'link',
        'category',
        'iconTitle',
        'screenshotTitle',
        'description',
    ];

    public function searchableAs(): string
    {
        return "tools_index";
    }

    public function toSearchableArray(): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'link' => $this->link,
            'category' => $this->category,
            'description' => $this->description,
        ];
    }
    
}
