<template>
  <div class="container-lg">

    <Breadcrumb></Breadcrumb>

    <div class="col-12">
      <div class="row">
        <div class="col-md-3 fw-bold">
          Seus dados
        </div>
        <div class="col-md-9">
          <div class="row g-3">

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

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Breadcrumb from './Components/JoinBreadcrumb';

export default {
  components: {
    Breadcrumb
  },
 data() {
    return {
      user: {
        name: 'Jose Comprador',
        email: 'c57737264923162229435@sandbox.pagseguro.com.br',
        password: '',
        "password_confirmation": '',
      },
      errors: {     
      }
    }
 }
}
</script>

<style>

</style>