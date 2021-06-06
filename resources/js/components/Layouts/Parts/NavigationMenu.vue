<template>
  <nav class="navbar navbar-expand-sm navbar-light border-bottom mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Company name</router-link>
      <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
        <ul class="navbar-nav" v-if="!isAuth">
          <li class="nav-item">
            <router-link class="nav-link" to="/pricing">Preços</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Entrar</router-link>
          </li>
        </ul>

        <ul class="navbar-nav h-100" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout()" id="logout">Sair</a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
</template>

<script>
  import authMixin from '../../../mixins/authMixin';
  import store from '../../../store';
  import {mapGetters, mapState} from 'vuex';

  export default {
    data() {
      return {
        //
      }
    },
    computed: {
    ...mapGetters({
                user: 'auth/user',
                isAuth: 'auth/isAuth'
            }),
    },
    mixins: [authMixin]
  }
</script>