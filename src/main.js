import Vue from 'vue'
import App from './App.vue'
let VueTouch = require('vue-touch')

import '@/assets/app.css'

Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
