<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Config;
use Storage;


class CheckoutController extends Controller
{

    public function webhook ( Request $request ) {

        $url_parameters = $request->notificationCode . "?email=".Config::get('pagseguro.credentials.email')."&token=" . Config::get('pagseguro.credentials.token');

        $api_url = (Config::get('pagseguro.sandbox')) ? Config::get('pagseguro.host.sandbox') . "/v2/transactions/notifications/" . $url_parameters : Config::get('pagseguro.host.production') . "/v2/transactions/notifications/" . $url_parameters;
        
        $curl = curl_init();

        curl_setopt_array($curl, [
          CURLOPT_URL => "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/notifications/6DE0B385048A048A052994750F926247A3DF?email=ramon_isaac2004%40hotmail.com&token=EB3410554F504A1DA2C9B7A65612D7EE",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_POSTFIELDS => "",
          CURLOPT_HTTPHEADER => [
            "Content-Type: application/x-www-urlencoded"
          ],
        ]);
        
        $response = curl_exec($curl);

        $err = curl_error($curl);
        
        curl_close($curl);
        
        
        $xml = simplexml_load_string($response);
        $json = json_encode($xml); // resposta com todos os dados
        $decode = json_decode($json, TRUE); // selecione apenas um parametro ex. dados["status"]

        // resposta completa:
        // {"date":"2021-06-06T18:30:30.000-03:00","code":"F2E9C8B6-8E43-43BC-8F40-7CFD85C91DC6","reference":"1001","type":"1","status":"3","lastEventDate":"2021-06-06T18:30:58.000-03:00","paymentMethod":{"type":"1","code":"101"},"grossAmount":"89.70","discountAmount":"0.00","feeAmount":"3.98","netAmount":"85.72","extraAmount":"0.00","escrowEndDate":"2021-07-06T18:30:58.000-03:00","installmentCount":"1","itemCount":"1","items":{"item":{"id":"0001","description":"Assinatura","quantity":"1","amount":"89.70"}},"sender":{"name":"Jose Comprador","email":"c57737264923162229435@sandbox.pagseguro.com.br","phone":{"areaCode":"11","number":"56273440"},"documents":{"document":{"type":"CPF","value":"22111944785"}}},"gatewaySystem":{"type":"cielo","rawCode":{},"rawMessage":{},"normalizedCode":{},"normalizedMessage":{},"authorizationCode":"0","nsu":"0","tid":"0","establishmentCode":"1056784170","acquirerName":"CIELO"}}
        
        Storage::disk('local')->put('init.txt', $decode['status']);

        // Storage::disk('local')->put('init.txt', $request->notificationCode );

        switch( $decode["status"] ) {
            case 1: return 'aguardando_pagamento';
            case 2: return 'em_analise';
            case 3: return 'paga';
            case 4: return 'disponivel';
            case 5: return 'em_disputa';
            case 6: return 'devolvida';
            case 7: return 'cancelada';
        }

    }

    public function pay (Request $request) {

        $planos = Config::get('pagseguro.planos');

        $plano_selecionado = $planos[ strtolower ( $request->plan["title"] ) ];

        $valor_total = number_format($plano_selecionado["price"], 2);

        $valor_parcela = number_format($request->payment["installments"]["selected"]["value"], 2);
        
        $data =[
            'email' => Config::get('pagseguro.credentials.email'),
            'token' => Config::get('pagseguro.credentials.token'),
            'paymentMode' => 'default',
            'paymentMethod' => 'creditCard',
            'receiverEmail' => Config::get('pagseguro.credentials.email'),
            'currency' => 'BRL',
            'itemId1' => '0001',
            'itemDescription1' => 'Assinatura',
            'itemAmount1' => $valor_total,
            'itemQuantity1' => '1',
            'notificationURL' => 'http://localhost:8000/api/checkout/webhook',
            'reference' => '1001',
            'amount' => $valor_total,
            'noIntInstalQuantity' => '12',  // valor minimo sem juros
            'senderName' => 'Jose Comprador',
            'senderCPF' => '22111944785',
            'senderAreaCode' => '11',
            'senderPhone' => '56273440',
            'senderEmail' => 'c57737264923162229435@sandbox.pagseguro.com.br',
            'senderHash' => $request->payment["sender_hash"],
            'shippingAddressRequired' => 'false', // não requer endereço de entrega
            'creditCardToken' =>  $request->payment["card_token"],
            'installmentQuantity' => $request->payment["installments"]["selected"]["quantity"],
            'installmentValue' => $valor_parcela,
            'noInterestInstallmentQuantity' => '12',
            'creditCardHolderName' => 'Jose Comprador',
            'creditCardHolderCPF' => '22111944785',
            'creditCardHolderBirthDate' => '27/10/1987',
            'creditCardHolderAreaCode' => '11',
            'creditCardHolderPhone' => '56273440',
            'billingAddressStreet' => 'Av. Brig. Faria Lima',
            'billingAddressNumber' => '1384',
            'billingAddressComplement' => '5o andar',
            'billingAddressDistrict' => 'Jardim Paulistano',
            'billingAddressPostalCode' => '01452002',
            'billingAddressCity' => 'Sao Paulo',
            'billingAddressState' => 'SP',
            'billingAddressCountry' => 'BRL'
        ];

        $api_url = (Config::get('pagseguro.sandbox')) ? Config::get('pagseguro.host.sandbox') . "/v2/transactions" : Config::get('pagseguro.host.production') . "/v2/transactions";
        
        $buildQuery = http_build_query($data);
        
        $curl = curl_init($api_url);

        curl_setopt($curl, CURLOPT_HTTPHEADER, Array("Content-Type: application/x-www-form-urlencoded; charset=UTF-8"));
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $buildQuery);

        $retorno = curl_exec($curl);

        curl_close($curl);

        $xml = simplexml_load_string($retorno);
        $encode = json_encode($xml);
        $decode = json_decode($encode, TRUE);
        
        switch( $decode["status"] ) {
            case 1: return 'aguardando_pagamento';
            case 2: return 'em_analise';
            case 3: return 'paga';
            case 4: return 'disponivel';
            case 5: return 'em_disputa';
            case 6: return 'devolvida';
            case 7: return 'cancelada';
        }

        // return response()->json($decode);
    
    }

    public function getSession ( Request $request ){

        $checkout_transparente = new \App\Pagseguro\CheckoutTransparente();

        return response()->json($checkout_transparente->token);

    }


    public function plans ( Request $request ) {

        $planos = Config::get('pagseguro.planos');

        return response()->json($planos[$request->plan]);

    }

}
