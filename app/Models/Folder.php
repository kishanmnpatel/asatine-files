<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Folder extends Model
{
    use HasFactory,SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'hashed_id','parent_id','user_id','name',
    ];

    protected $with=['folder'];

    public function folders()
    {
        return $this->hasMany(Folder::class,'parent_id','id')->orderBy('name');
    }

    public function folder()
    {
        return $this->belongsTo(Folder::class,'parent_id','id');
    }

    public function files()
    {
        return $this->hasMany(File::class)->orderBy('name');
    }
}
