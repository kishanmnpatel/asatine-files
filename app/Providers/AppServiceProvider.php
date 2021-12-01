<?php

namespace App\Providers;

use App\Models\File;
use App\Models\User;
use App\Models\Folder;
use App\Observers\FileObserver;
use App\Observers\UserObserver;
use App\Observers\FolderObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Folder::observe(FolderObserver::class);
        File::observe(FileObserver::class);
    }
}
