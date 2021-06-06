<template>
    <nav class="py-4" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/pricing">Preços</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page" v-if="$route.params.plan === 'free'">Cadastro</li>
        <li class="breadcrumb-item active" aria-current="page" v-else>Pagamento</li>
        <li class="breadcrumb-item active" aria-current="page">Confirmação</li>
      </ol>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>