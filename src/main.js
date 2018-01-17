import Vue from 'vue'
import App from './App'

import wcPullupLoad from './wc-pullup-load'
Vue.use(wcPullupLoad);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
