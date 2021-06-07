import store from '../store';

import VueAffixBox from 'vue-affix-box'
import {TheMask} from 'vue-the-mask'

var checkoutMixin = {
  components: {
    VueAffixBox,
    TheMask
  },
  
  data() {
    return {

      brand: '', // vai aparecer depois que for selecionado uma bandeira
      plan: {},
      cardBrandImage: '',

      // user: {
      //   name: 'Jose Comprador',
      //   email: 'c57737264923162229435@sandbox.pagseguro.com.br',
      //   password: '',
      //   "password_confirmation": '',
      // },

      payment: {
        card_number: '',
        sender_hash: '',
        card_token: '',
        cvv: 123,
        month: 12,
        year: 2030,
        installments: {
          show: false, // esconde input de parcelas
          value: 1,
          options: [],
          selected: {
            quantity: 1,
            value: 0
          }
        },
        fullname_card: 'Jose Comprador',
        cpf: '22111944785',
        birth_date: '27/10/1987',
        telephone: '1156273440',
        cep: '01452002',
        street: 'Av. Brig. Faria Lima',
        number: '1384',
        complement: '5o andar',
        district: 'Jardim Paulistano',
        city: 'Sao Paulo',
        uf: 'SP',
      },
      errors: {
        name: '',
        email: '',
        password: '',
        'password_confirmation': ''
      }
    }
  },
  
  created: function() {
    var vm = this;
    
    // capturar sessão do pagseguro
    axios.request({
      method: 'GET', 
      url: 'api/checkout/session'
    })
    .then(function (response) {
      PagSeguroDirectPayment.setSessionId(response.data);
      // vm.paymentMethods(2.50);
    })
    .catch(function (error) {
      console.error(error);
    });

    // capturar valores do plano selecionado
    axios.request({
      method: 'GET', 
      url: `api/plans/${vm.$route.params.plan}`
    })
    .then(function (response) {
      vm.plan = response.data;
      vm.payment.installments.selected.value = response.data.price
    })
    .catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Esse plano não existe!',
        showConfirmButton: false,
      })
    });
  },

  
  watch: {
    /* ao selecionar um modelo ele irá = */
    "payment.cep": function(oldCepName, newCepName){
      if( newCepName.length === 7 ){
        this.consultarCep(oldCepName)
      }
    },
    
    "payment.card_number": function(oldCardNumber, newCardNumber){
      if( oldCardNumber.length === 6 ){
        this.getBrand ( oldCardNumber );
      }
    },
    
    "payment.installments.value": function (oldinstallments, newinstallments) {
      // mudar valores de parcelas selecionada ao mudar no campo selected
      this.payment.installments.selected.value = $("#installments").find(`option[value='${oldinstallments}']`).data('parcel')
      this.payment.installments.selected.quantity = oldinstallments
    },
    

  },

  filters: {
    toBRL: function (value) {
      if (!value) return ''
      return parseFloat(value).toFixed(2).replace(".", ",")
    }
  },

  methods: {

    pay () {

      var vm = this;

      $("#finish").text("Finalizando...").attr("disabled","disabled");

      PagSeguroDirectPayment.createCardToken({
        cardNumber: vm.payment.card_number, // Número do cartão de crédito
        brand: vm.brand, // Bandeira do cartão
        cvv: vm.payment.cvv, // CVV do cartão
        expirationMonth: vm.payment.month, // Mês da expiração do cartão
        expirationYear: vm.payment.year, // Ano da expiração do cartão, é necessário os 4 dígitos.
        success: function (retorno) {
          vm.payment.card_token = retorno.card.token;

          vm.finish (); 

        },
        error: function (retorno) {
          // Callback para chamadas que falharam.
          $.each(retorno.errors, function (i, obj) {
            Swal.fire({
              icon: 'error',
              title: obj,
              showConfirmButton: false,
            })
          });

          $("#finish").text("Finalizar").removeAttr("disabled");

        },
        // complete: function (retorno) {
        // }
      });

    },

    finish ( cardToken ) {
      var vm = this;

      PagSeguroDirectPayment.onSenderHashReady(function(response){
        
        if(response.status == 'error') {
            console.log(response.message);
            return false;
        }

        vm.payment.sender_hash = response.senderHash; //Hash estará disponível nesta variável.

        axios.request({
          method: 'POST', 
          url: 'api/checkout/pay',
          data: {
            user: vm.user,
            payment: vm.payment,
            plan: vm.plan
          }
        })
        .catch(function (error) {
          console.error(error);
          // redirecionar para página de erro no pagamento
        })
        .then(function(response){
          $("#finish").text("Finalizar").removeAttr("disabled");
          
          console.log(response.data)
        })
        

        
      });
    },
    
    getBrand ( cardNumber ) {
      var vm = this;
      
      PagSeguroDirectPayment.getBrand({
        cardBin: cardNumber,
        success: function (retorno) {
          var imageBrand = retorno.brand.name;
          vm.brand = retorno.brand.name;
          vm.cardBrandImage = `https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/68x30/${imageBrand}.png`;

          vm.getInstallments(imageBrand)
        },
        error: function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Cartão inválido!',
            showConfirmButton: false,
          })
        }
      });
    },
    
    getInstallments (brand) {
      var vm = this;
      PagSeguroDirectPayment.getInstallments({
        //Valor do produto
        amount: vm.plan.price,
        //Quantidade de parcelas sem juroz
        maxInstallmentNoInterest: 12, // meses minimos sem juros
        //Tipo da bandeira
        brand: brand,
        success: function (retorno) {
          // adicionar todas as opções de parcelamento no select. (inativo)
          // vm.payment.installments.options = retorno.installments[brand]
          // adicionar apenas as opções em 1x e a quantidade equivalente ao plano escolhido.
          axios.request({
            method: 'GET', 
            url: `api/plans/${vm.$route.params.plan}`
          })
          .then(function (response) {
            vm.payment.installments.options = [];
            vm.payment.installments.show = true;
            vm.payment.installments.options.push(retorno.installments[brand][0])
            // se tiver mais parcelas disponíveis do que meses de plano, ele vai dar a opção de dividir na quantidade de meses do plano
            if( retorno.installments[brand].length >= response.data.months ) {
              // acrescentar +1 para o mês ser equivalente a parcela do plano
              response.data.months--;
              vm.payment.installments.options.push(retorno.installments[brand][response.data.months]);
            }
          })
          .catch(function (error) {
            console.error(error);
          });

          // parcela selecionada inicialmente sempre em 1x.
          vm.payment.installments.selected.quantity = retorno.installments[brand][0].quantity
          vm.payment.installments.selected.value = retorno.installments[brand][0].installmentAmount
        },
        error: function (retorno) {
          console.error(retorno)
        }
      });
    }, 
    
    paymentMethods ( amount ) {
      // método serve apenas para recuperar todos os meios de pagamento
      PagSeguroDirectPayment.getPaymentMethods({
        amount: amount,
        success: function(response) {
          $.each(response.paymentMethods.CREDIT_CARD.options, function (i, obj) {
            console.log("https://stc.pagseguro.uol.com.br" + obj.images.MEDIUM.path)
            // console.log("https://stc.pagseguro.uol.com.br" + obj.images.SMALL.path)
          });
        },
        error: function(response) {
          //tratamento do erro
        },
        complete: function(response) {
          //tratamento comum para todas chamadas
        }
      });
    },
    
    consultarCep(cep) {
      var options = {method: 'GET', url: "https://viacep.com.br/ws/" + cep + "/json/"};
      var vm = this
      axios.request(options).then(function (response) {
        vm.payment.street = response.data.logradouro
        vm.payment.complement = response.data.complemento
        vm.payment.district = response.data.bairro
        vm.payment.city = response.data.localidade
        vm.payment.uf = response.data.uf
      }).catch(function (error) {
        console.error(error);
      });
    },
    
  },
  
}

export default checkoutMixin