<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\Auth\AuthController::class,'login']);
Route::post('register', [App\Http\Controllers\Auth\AuthController::class,'register']);
  
Route::group(['middleware' => 'auth.api'], function() {
    Route::post('logout', [App\Http\Controllers\Auth\AuthController::class,'logout']);
    Route::post('getUserDetails', [App\Http\Controllers\Auth\AuthController::class,'getUserDetails']);
    Route::resource('/folder', App\Http\Controllers\FolderController::class);
});
