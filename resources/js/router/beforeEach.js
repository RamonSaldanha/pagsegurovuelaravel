import store from '../store';

export default async (to, from, next) => {
  const token = localStorage.getItem('access_token');

  if( token ) {
    store.dispatch('auth/getUserByToken', token )
    .then(resp => {
      // todas as rotas que não exigerem rote vão ser representados pelo nível de acesso 0
      to.meta.role = to.meta.role ? to.meta.role : 0;
      // resp.license_expired
      if( resp.role  >= to.meta.role ) {
        if( resp.license_expired ) {
          
          store.dispatch('auth/logout', token )
          .then(function (response) {
            localStorage.removeItem('access_token');
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Sua assinatura venceu!',
              showConfirmButton: false,
              timer: 3000
            })
            return next({
              path: '/checkout/trimestral',
            })
          })

        } else {
          return next();
        }
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Você não tem permissão!',
          showConfirmButton: false
        })
        return next({
          path: '/login',
        })
      }
    })
    // legado:

    // .catch(error => {
    //   if(error.responseJSON.license_expired) {

    //     store.dispatch('auth/logout', localStorage.getItem('access_token'))
    //     .then(function (response) {
    //       localStorage.removeItem('access_token');
    //       Swal.fire({
    //         position: 'top-end',
    //         icon: 'error',
    //         title: 'Sua assinatura venceu!',
    //         showConfirmButton: false,
    //         timer: 3000
    //       })
    //       return next({
    //         path: '/checkout/trimestral',
    //       })
    //     })

    //   } else {
    //     return next();
    //   }
    // })
  } else {
    if( to.meta.role ) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Você não está logado!',
        showConfirmButton: false,
        timer: 3000
      })
      next({
        path: '/login'
      });
    } else {
      next();
    }
  }
}
