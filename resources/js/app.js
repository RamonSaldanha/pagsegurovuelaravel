require('./bootstrap');

window.Vue = require('vue');

import router from './router/index';
import App from './components/Layouts/default';
import store from './store';

axios.defaults.baseURL = assetUrl;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    store,
    router
});
