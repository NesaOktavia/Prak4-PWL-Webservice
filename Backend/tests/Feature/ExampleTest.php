<?php

namespace Tests\Feature;
use routes\api;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $_komentar = Komen::create([
            'name' => 'name',
            'komen' => 'komen',
        ]);
        $response = $this->postJson('/review',[
            'name',
            'komen',
        ]);

        $response->assertStatus(200);
    }
}
