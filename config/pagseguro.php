<?php

return [

  'sandbox' => true,

  'credentials' => [
    'email' => 'ramon_isaac2004@hotmail.com',
    'token' => 'EB3410554F504A1DA2C9B7A65612D7EE'
  ],

  'host' => [
    'production' => 'https://ws.pagseguro.uol.com.br',
    'sandbox' => 'https://ws.sandbox.pagseguro.uol.com.br'
  ],

  "planos" => [
    'trimestral' => [
        'title' => 'Trimestral',
        'price' => 89.70,
        'months' => 3,
        'description' => 'Acesso ilimitado por três meses'
    ],
    'semestral' => [
        'title' => 'Semestral',
        'price' => 131.40,
        'months' => 6,
        'description' => 'Acesso ilimitado por seis meses'
    ],
    'free' => [
        'title' => 'Grátis',
        'price' => 00.00,
        'months' => 0,
        'description' => 'Acesso ilimitado por 7 dias'
    ]
  ]

];