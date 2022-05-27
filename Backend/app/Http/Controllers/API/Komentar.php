<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Komen;

class Komentar extends Controller
{
    public function store(Request $request) {
        $komentar = new Komen;
        $komentar->name = $request->input('name');
        $komentar->komen = $request->input('komen');
        $komentar->save();

        return response()->json([
            'status' => 200,
            'message' => 'berhasil',
        ]);
    }
}
