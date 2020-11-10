import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import './main.scss'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Yoga from './components/Yoga.vue'
import Pranayama from './components/Pranayama.vue'
import jQuery from 'jQuery'


window.jQuery = jQuery

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false





const routes = [
    { path: "/",
     component: Home
  },
    { path: "/about",
     component: About
  },
    { path: "/yoga",
    component: Yoga
  },
    { path: "/pranayama",
    component: Pranayama
  }
]

const router = new VueRouter({
    routes

});




new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
