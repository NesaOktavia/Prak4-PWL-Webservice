<?php

namespace Tests\Feature;
use App\Models\Komen;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TestKomen extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
       
        $komen = Komen::make([
            'name' => 'name',
            'komen' => 'komen',
        ]);
        $response = $this->postJson('/api/review/{$komen}',[
            'name' => 'php',
            'komen' => 'bagus',
        ]);

        $response->assertStatus(200);
    }
}
