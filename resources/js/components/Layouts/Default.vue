<template>
  <div>
        
    <NavigationMenu></NavigationMenu>
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <Footer></Footer>
    
  </div>
</template>

<script>
  import store from '../../store';
  import {mapGetters, mapState} from 'vuex';
  import NavigationMenu from './Parts/NavigationMenu';
  import Footer from './Parts/Footer';

  export default {
    data() {
      return {
      }
    },
    components: {
      NavigationMenu,
      Footer
    },
    computed: {
      ...mapGetters({
                user: 'auth/user'
            }),
    }
  }
</script>
