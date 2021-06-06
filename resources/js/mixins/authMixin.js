import store from '../store';

var authMixin = {

  methods: {
    
    login() {
      var vm = this;
      store.dispatch('auth/login',{
        email: this.email,
        password: this.password
      }).then( (response) => {
        localStorage.setItem('access_token', response.data.access_token)
        this.$router.push('home');
      }).catch(error=>{
          vm.error = "Login ou senha errados."
      });
    },

    signup() {
      var vm = this;
      store.dispatch('auth/signup',{
        name: vm.name,
        email: vm.email,
        password: vm.password,
        "password_confirmation": vm.password_confirmation
      }).then( (response) => {
          vm.$router.push('login');
      }).catch(error=>{
        vm.errors = error.responseJSON.errors;
      });
    },

    logout() {
      var vm = this;   
      $('#logout').text('...')
      store.dispatch('auth/logout', localStorage.getItem('access_token'))
      .then(function (response) {
        localStorage.removeItem('access_token');
        $('#logout').text('Sair')
        vm.$router.push('login');
      })
    }
  },

}

export default authMixin