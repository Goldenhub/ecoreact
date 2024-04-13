<?php

namespace App\Http\Controllers;

use App\Models\Reacttool;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReacttoolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): array|string
    {
        return Reacttool::all();
    }

    public static function getLatestTools()
    {
        // get the latest five tools
        return Reacttool::latest()->limit(5)->get();
    }
    public static function getToolsByCategory(string $category)
    {
        // get tools by category
        if ($category === 'all') {
            return (new ReacttoolController)->index();
        } else {
            return Reacttool::where('category', $category)->get();
        }
    }

    public static function getToolBySlug(string $slug)
    {
        return Reacttool::where('slug', $slug)->firstOrFail();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Reacttools/Create', [
            "categories" => (new CategoryController)->index(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|regex:/^[A-Za-z0-9-]+$/',
            'link' => 'required|url',
            'category' => 'required|string|max:255',
            'iconTitle' => 'required|string|max:255',
            'screenshotTitle' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);


        $request->user()->reacttools()->create($validated);

        return redirect(route('add.create'));
    }


    /**
     * Display the specified resource.
     */
    public function show(Reacttool $reacttool)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reacttool $reacttool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reacttool $reacttool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reacttool $reacttool)
    {
        //
    }
}
