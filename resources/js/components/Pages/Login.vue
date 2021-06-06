<template>
  <div class="auth-page">
    <div class="d-flex flex-column h-100">
      <div class="m-auto col-md-5">
      <form @submit.prevent="login()">
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" v-model="email" :class="{ 'is-invalid': error }" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div class="invalid-feedback" v-if="error">
            {{ error }}
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" v-model="password" :class="{ 'is-invalid': error }" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="invalid-feedback" v-if="error">
          {{ error }}
        </div>
        <button class="btn btn-primary" type="submit">Entrar</button>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
  import authMixin from '../../mixins/authMixin';
  
  // import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
        errors: {
          name: '',
          email: '',
          password: '',
          'password_confirmation': ''
        }
      }
    },
    mixins: [authMixin]
  }
</script>
