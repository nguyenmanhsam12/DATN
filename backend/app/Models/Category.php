<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Category extends Model
{
    use HasFactory , HasSlug ;

    protected $table = 'categories';

    protected $fillable = ['name','parent_id'];

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name') // Tạo slug từ trường 'name'
            ->saveSlugsTo('slug'); // Lưu vào trường 'slug'
    }
}
