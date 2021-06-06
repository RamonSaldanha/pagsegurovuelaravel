<template>
	<div>

		<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			<h1 class="display-4">Preços</h1>
			<p class="lead">
				Compare os preços e encontre um plano que se adeque ao seu orçamento.
			</p>
		</div>

		<div class="container">
			<div class="row text-center">
				
				<div class="col-md-4">
					<div class="card">
						<div class="card-header">
							<h4 class="my-0 font-weight-normal">Grátis</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title pricing-card-title d-flex">
								<div class="m-auto d-flex">
									R$ 00
									<div class="d-flex flex-column">
										<div class="text-muted centavos mr-5">,00</div>
										<div class="text-muted meses mr-4">7 dias</div>
									</div>
								</div>
							</h1>
							<div>Não paga nada</div>
							<div class="d-grid gap-2">
								<router-link class="btn btn-lg btn-outline-primary" to="/join">Experimente grátis</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div class="card">
						<div class="card-header">
							<h4 class="my-0 font-weight-normal">3 meses</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title pricing-card-title d-flex">
								<div class="m-auto d-flex">
									R$ 89
								<div class="d-flex flex-column">
										<div class="text-muted centavos mr-5">,70</div>
										<div class="text-muted meses mr-1">3 meses</div>
									</div>
								</div>
							</h1>
							<div>R$ 29,9 por mês</div>
							<div class="d-grid gap-2">
								<router-link class="btn btn-lg btn-primary" to="/join">Adquirir licença</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div class="card">
						<div class="card-header">
							<h4 class="my-0 font-weight-normal">6 meses</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title pricing-card-title d-flex">
								<div class="m-auto d-flex">
									R$ 131
									<div class="d-flex flex-column">
										<div class="text-muted centavos mr-5">,40</div>
										<div class="text-muted meses mr-1">6 meses</div>
									</div>
								</div>	
							</h1>
							<div>R$ 21,90 por mês</div>
							<div class="d-grid gap-2">
								<router-link class="btn btn-lg btn-primary" to="/join">Adquirir licença</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
  import authMixin from '../../mixins/authMixin';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        "password_confirmation": '',
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
