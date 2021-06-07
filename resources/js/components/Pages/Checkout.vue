<template>
  <div class="container-lg">

    <Breadcrumb></Breadcrumb>

    <div class="row">
      <div class="col-md-8">
        <div class="row gy-5">
          <div class="col-12">
            <div class="row">
              <div class="col-md-3 fw-bold">
                Seus dados
              </div>
              <div class="col-md-9">
                <strong>Nome e Sobrenome:</strong> {{user.name}} <br />
                <strong>E-mail:</strong> {{user.email}}

                <!-- <div class="row g-3">

                  <div class="col-12">
                    <div class="form-group">
                      <label for="name">Nome e Sobrenome</label>
                      <input type="text" style="max-width: 350px;" v-model="user.name" :class="{ 'is-invalid': errors.name }" class="form-control form-control-lg" id="name" aria-describedby="name">
                      <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label for="exampleInputEmail1">E-mail</label>
                      <input type="email" style="max-width: 350px;" v-model="user.email" class="form-control form-control-lg" :class="{ 'is-invalid': errors.email }" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email[0] }}
                      </div>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-group">
                      <label for="exampleInputPassword1">Senha</label>
                      <input type="password" v-model="user.password" class="form-control form-control-lg" :class="{ 'is-invalid': errors.password }" id="exampleInputPassword1">
                      <div class="invalid-feedback" v-if="errors.password">
                        {{ errors.password[0] }}
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-6">
                    <div class="form-group">
                      <label for="repetir-senha">Repetir Senha</label>
                      <input type="password" id="repetir-senha" v-model="user.password_confirmation" :class="{ 'is-invalid': errors.password }" class="form-control form-control-lg">
                      <div class="invalid-feedback" v-if="errors.password_confirmation">
                        {{ errors.password_confirmation[0] }}
                      </div>
                    </div>
                  </div>

                </div> -->
              </div>
            </div>
          </div>

          <div class="col-12 border-top pt-5" v-if="$route.params.plan != 'free'">
            <div class="row">
              <div class="col-md-3 fw-bold">
                Dados do cartão
              </div>
              <div class="col-md-9">
                <div class="row g-3">

                  <div class="col-8">
                    <div class="form-group">
                      <label for="card_number">Número do cartão</label>
                      <the-mask id="card_number" v-model="payment.card_number" class="form-control form-control-lg" :mask="['#### #### #### ####']" />
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>
                  
                  <div class="col-4 d-flex flex-column justify-content-center pt-3">
                    <div>
                      <img :src="cardBrandImage" />
                    </div>
                  </div>

                  <div class="col-4">
                    <label for="cvv">CVV</label>
                    <input id="cvv" type="text" v-model="payment.cvv" style="max-width: 350px;" class="form-control form-control-lg">
                  </div>

                  <div class="col-4">
                    <label for="month">Mês</label>
                      <select id="month" v-model="payment.month" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                  </div>

                  <div class="col-4">
                    <label for="year">Ano</label>
                      <select id="year" v-model="payment.year" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                        <option value="2036">2036</option>
                        <option value="2037">2037</option>
                        <option value="2038">2038</option>
                        <option value="2039">2039</option>
                        <option value="2040">2040</option>
                        <option value="2041">2041</option>
                        <option value="2042">2042</option>
                        <option value="2043">2043</option>
                        <option value="2044">2044</option>
                        <option value="2045">2045</option>
                        <option value="2046">2046</option>
                        <option value="2047">2047</option>
                        <option value="2048">2048</option>
                        <option value="2049">2049</option>
                        <option value="2050">2050</option>
                      </select>
                  </div>

                  <div class="col-12" v-show="payment.installments.show">
                    <div class="form-group">
                      <label for="installments">Quantidade de parcelas</label>
                      <select id="installments" v-model="payment.installments.value" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option v-for="option in payment.installments.options" :value="option.quantity" :data-parcel="option.installmentAmount.toFixed(2)" :key="option.quantity" >
                          {{option.quantity}}x de {{option.installmentAmount | toBRL }}
                        </option>
                      </select>
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 border-top pt-5" v-if="$route.params.plan != 'free'">
            <div class="row">
              <div class="col-md-3 fw-bold">
                Dados do titular do cartão
              </div>
              <div class="col-md-9">
                <div class="row g-3">

                  <div class="col-8">
                    <div class="form-group">
                      <label for="fullname_card">Nome do titular (igual ao cartão)</label>
                      <input id="fullname_card" v-model="payment.fullname_card" type="text" class="form-control form-control-lg">
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="form-group">
                      <label for="cpf">CPF</label>
                      <the-mask id="cpf" class="form-control form-control-lg" v-model="payment.cpf" placeholder="000.000.000-00" :mask="['###.###.###-##']" />
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="form-group">
                      <label for="birth_date">Data de nascimento</label>
                      <the-mask id="birth_date" :masked="true" v-model="payment.birth_date" type="text" class="form-control form-control-lg" placeholder="01/01/1999" :mask="['##/##/####']"   />
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-group">
                      <label for="telephone">Telefone</label>
                      <the-mask id="telephone" v-model="payment.telephone" type="text" style="max-width: 200px;" class="form-control form-control-lg" :mask="['(##) ####-####', '(##) #####-####']" placeholder="(00) 9 0000-0000" />
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-12 border-top pt-5" v-if="$route.params.plan != 'free'">
            <div class="row">
              <div class="col-md-3 fw-bold">
                Endereço do titular do cartão
              </div>
              <div class="col-md-9">
                <div class="row g-3">

                  <div class="col-12">
                    <div class="form-group">
                      <label for="cep">CEP</label>
                      <the-mask id="cep" v-model="payment.cep" type="text" style="max-width: 200px;" class="form-control form-control-lg" :mask="['#####-###']"  placeholder="00000-000" />
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label for="street">Logradouro</label>
                      <input id="street" v-model="payment.street" type="text" style="max-width: 350px;" class="form-control form-control-lg" placeholder="Av. Brig. Fulano de tal">
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="form-group">
                      <label for="number">Número</label>
                      <input id="number" v-model="payment.number" type="text" style="max-width: 350px;" class="form-control form-control-lg" placeholder="">
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-8">
                    <div class="form-group">
                      <label for="complement">Complemento</label>
                      <input id="complement" v-model="payment.complement" type="text" style="max-width: 350px;" class="form-control form-control-lg" placeholder="">
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label for="district">Bairro</label>
                      <input id="district" v-model="payment.district" type="text" style="max-width: 350px;" class="form-control form-control-lg" placeholder="">
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-8">
                    <div class="form-group">
                      <label for="city">Cidade</label>
                      <input id="city" v-model="payment.city" type="text" class="form-control form-control-lg" placeholder="">
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="form-group">
                      <label for="uf">Estado</label>
                      <select id="uf" v-model="payment.uf" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                      <!-- <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                      </div> -->
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
    
      </div>

      <div class="col-md-4">
        <vue-affix-box :offset-top="20">
        <div class="card" id="sidemenu">
          <div class="card-header p-4">
            <h4 class="m-0">Resumo de compra</h4>
          </div>
          <div class="card-body p-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                Plano {{ plan.title }}
                <span class="">
                  R$ {{ plan.price | toBRL }}
                </span>
              </li>
  
              <li class="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
                <span class="">
                  {{ payment.installments.selected.quantity }}x R$ {{ payment.installments.selected.value | toBRL }}
                </span>
              </li>
            </ul>
            <div class="d-grid gap-2 mt-3">
              <button id="finish" @click="pay" class="btn btn-lg btn-primary" to="/checkout/free">
                Finalizar
              </button>
            </div>
          </div>
        </div>
        </vue-affix-box>
      </div>
    </div>
  </div>
</template>
<script>
  import checkoutMixin from '../../mixins/checkoutMixin';
  import Breadcrumb from './Components/JoinBreadcrumb';
  import {mapGetters, mapState} from 'vuex';

  export default {
    computed: {
    ...mapGetters({
                user: 'auth/user',
                isAuth: 'auth/isAuth'

            }),
    },
    components: {
      Breadcrumb
    },
    mixins: [checkoutMixin]
  }
</script>

<style>

</style>