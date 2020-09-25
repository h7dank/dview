import Vue from 'vue'
import App from './APP.vue'
import '@/styles/index.scss'

Vue.config.debug = true

new Vue({
    render: h => h(App)
}).$mount('#app')