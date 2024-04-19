<?php

use App\Http\Controllers\ProfileController;
use App\Models\Task;
use App\Models\TaskList;
use App\Models\Template;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
    ]);
});

Route::get('/list/{list}', function (TaskList $list) {
    return response()->json($list->load('tasks'));
})->name('lists.show');

Route::get('/share/{list}', function (TaskList $list) {
    return Inertia::render('SharedList', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'list' => $list->load('tasks'),
    ]);
})->name('lists.share');


Route::post('lists', function(Request $request) {
    $list = TaskList::create([
        "user_id" => auth()->id() ? auth()->id() : null,
        "name" => date("Y-m-d H:i:s"),
    ]);
    return $list;
});

Route::post('lists/{list}/task/{task}', function(Request $request, TaskList $list, Task $task) {
    request('completed') ? $task->update(['completed_at' => now()]) : $task->update(['completed_at' => null]);
    return response()->json(['task' => $task->fresh()]);
});

Route::post('lists/{list}/task', function(Request $request, TaskList $list) {
    $task = $list->tasks()->create([
         "user_id" => auth()->id() ? auth()->id() : null,
        "description" => $request->task,
    ]);

    return $task;
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
