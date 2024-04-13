<?php

namespace App\Http\Controllers;

use App\Models\ToolRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ToolRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(ToolRequest::all());
        return Inertia::render('ToolRequests/Index', [
            "requests" => ToolRequest::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ToolRequests/Create', [
            
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'reason' => 'required|string|max:255',
            'url' => 'required|url'
        ]);

        $toolrequest = new ToolRequest();

        $toolrequest->name = $request->input('name');
        $toolrequest->reason = $request->input('reason');
        $toolrequest->url = $request->input('url');

        $toolrequest->save();

        return redirect(route('tool.create'));
    }

    /**
     * Display the specified resource.
     */
    public function show(ToolRequest $toolRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ToolRequest $toolRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ToolRequest $toolRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ToolRequest $toolRequest)
    {
        //
    }
}
