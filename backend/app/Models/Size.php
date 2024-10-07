<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;

    protected $table = 'sizes';
    
    protected $fillable = ['size'];

    public function variantsSize()
    {
        return $this->hasMany(ProductVariant::class);
    }
}