<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $dates = ['completed_at']; 

    protected $fillable = ["description", "completed_at", 'user_id'];

    public function getCompletedAtAttribute($value)
    {
        // Check if value is not null and return a formatted date
        if ($value) {
            return Carbon::parse($value)->diffForHumans();
        }
        
        return null;
    }
}
