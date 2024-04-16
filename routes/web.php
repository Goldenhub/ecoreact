<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReacttoolController;
use App\Http\Controllers\ToolRequestController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'date' => date('Y'),
        'tools' => ReacttoolController::getLatestTools(),
        'categories' => (new CategoryController)->index(),
    ]);
})->name('index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/category/{category}', function (string $category) {
    return Inertia::render('Category', [
        'category' => $category,
        'tools' => ReacttoolController::getToolsByCategory($category),
        'categories' => (new CategoryController)->index(),
        'date' => date('Y'),
    ]);
})->name("category");

Route::get('/tools/{slug}', function (string $slug) {
    return Inertia::render('Tool', [
        'tool' => ReacttoolController::getToolBySlug($slug),
        'date' => date('Y'),
    ]);
})->name('tools');

Route::resource('request', ToolRequestController::class)
    ->only(['create', 'store',]);

Route::resource('request', ToolRequestController::class)
    ->only(['index'])
    ->middleware(['auth', 'verified']);


Route::resource('categories', CategoryController::class)
    ->only(['index', 'create', 'store'])
    ->middleware(['auth', 'verified']);

Route::resource('tool', ReacttoolController::class)
    ->only(['index', 'create', 'store'])
    ->middleware(['auth', 'verified']);

Route::get('search', function () {
    $query = 'React'; // <-- Change the query for testing.

    $tools = App\Models\Reacttool::search($query)->get();

    return $tools;
});

require __DIR__ . '/auth.php';
