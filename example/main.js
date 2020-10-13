import Vue from 'vue'
import App from './APP.vue'
import '@/styles/index.scss'
import dview from  '@/index'

Vue.config.debug = true

Vue.use(dview)

new Vue({
    render: h => h(App)
}).$mount('#app')