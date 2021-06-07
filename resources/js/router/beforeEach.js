import store from '../store';

export default async (to, from, next) => {
  const token = localStorage.getItem('access_token');
  let { role, auth } = to.meta;

  // se precisar de login e não tiver token
  if( auth && !token ) {

    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Você não está logado!',
      showConfirmButton: false,
    })

    return next({ path: '/login' });

  }

  if( !token ) {
    return next();
  }

  // se tiver token
  store.dispatch('auth/getUserByToken', token )
  .then(resp => {

    // toda as rotas sem exigência de role, será 0
    role = role ? role : 0;

     
    // se não precisar de login
    if( !auth ) {
      return next();
    }
    
    // se não tiver autorização
    if( resp.role  < role ) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Você não tem permissão!',
        showConfirmButton: false
      });
      return next({ path: '/login' });
    }
    
    // se a liceça expirou
    if(resp.license_expired) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Sua licença expirou!',
        showConfirmButton: true
      });
      return next({ path: '/checkout/trimestral'})
    } 

    return next();

  })

}
