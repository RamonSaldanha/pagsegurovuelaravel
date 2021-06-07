<template>
    <div class="welcome-page">
        <div class="d-flex h-100 flex-column justify-content-center">
            <div class="mx-auto">
                <h2 class="h2">Você está logado(a) {{ user }}.</h2>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  export default {
    computed: {
    ...mapGetters({
                user: 'auth/user',
            }),
    }
  }
</script>
