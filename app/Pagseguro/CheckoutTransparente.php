<?php

namespace App\Pagseguro;

/**
* 
*/
class CheckoutTransparente
{

	public $id;
	
	public function __construct()
	{


		$ch = curl_init();

		/*
			ele buscará nas configurações do pagseguro um valor true ou false pra
			indicar o ambiente apropriado, se é o sandbox ou o de produção(definitivo)
		*/
		if(\Config::get('pagseguro.sandbox')){

			/* endereço da api sandbox */
			curl_setopt($ch, CURLOPT_URL, \Config::get('pagseguro.host.sandbox') . '/v2/sessions/?email='.\Config::get('pagseguro.credentials.email').'&token='.\Config::get('pagseguro.credentials.token'));

		} else {

			/* endereço da api sandbox */
			curl_setopt($ch, CURLOPT_URL, \Config::get('pagseguro.host.production') . '/v2/sessions/?email='.\Config::get('pagseguro.credentials.email').'&token='.\Config::get('pagseguro.credentials.token'));

		}
		

    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded; charset=UTF-8"));

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, true);

		$data = curl_exec($ch);

		/* transforma xml em array */
    $xml = simplexml_load_string($data);
    $encode = json_encode($xml);
    $decode = json_decode($encode);

		$this->token = $decode->id;

		curl_close($ch);

	}


	public function __toString(){

		return $this->token;

	}

}

/* recuperar session id do pagseguro */
// $checkout_transparente = new \App\Pagseguro\CheckoutTransparente();