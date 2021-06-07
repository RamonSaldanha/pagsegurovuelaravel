const state = {
  user: {},
  token: '',
  isAuth: false
};

const getters = {
  user: state => state.user,
  token: state => state.user.access_token,
  isAuth: state => state.isAuth
};

const actions = {

  login({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/login', {
        email: data.email,
        password: data.password,
        "remember_me": true
      }).then(res => {
        commit('setUser', res.data);
        commit('setAuth', true);
        commit('setToken', res.data.access_token);
        resolve(res);
      }).catch( error => {
        reject(error)
      })
    });
  },

  logout({commit}, token) {
    return new Promise((resolve, reject) => {
      axios.get('/api/auth/logout', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        commit('setAuth', false);
        resolve(response);
      }).catch(error => {
        reject(error);
      })
    });
  },

  getUserByToken( {commit}, token ) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/auth/user',
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        commit('setUser', response);
        commit('setAuth', true);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      })
      
    });
  },

  signup ({commit}, data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/auth/signup',
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
          "password_confirmation": data.password_confirmation
        },
        method: "post",
      })
      .then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      })

    })
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setAuth (state, mode) {
    state.isAuth = mode;
  },
  setToken (state, token) {
    state.token = token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};