import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import {Lazyload} from "vant"

Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      Pageloading:false,
      Classifyloading:false,
      Detailsloading:false,
      Particularsloading:false,
      InputBoxloading:false,
      InputBoxloadings:false,
      MoreKitchenloading:false
    }
  },
}).$mount('#app')
