import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    meta:{
      index:0
      }
  },
  {
    path: '/classify',
    name: 'Classify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue'),
    meta:{
      index:0
      }
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "about" */ '../views/Basket.vue'),
    meta:{
      index:0
      }

  },
  {
    path: '/more',
    name: 'More',
    component: () => import(/* webpackChunkName: "about" */ '../views/More.vue'),
    meta:{
      index:0
      }
  },
  {
    path: '/particulars',
    name: 'Particulars',
    component: () => import(/* webpackChunkName: "about" */ '../views/Particulars.vue'),
    meta:{
      index:1
      }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue'),
    meta:{
      index:2,
      isBool:true
      }
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreKitchen.vue'),
    meta:{
      index:1
      }
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreCollect.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreHistory.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing.vue'),
    meta:{
      index:1
      }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta:{
      index:1
      }
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    // if (savedPosition) {
    //   return savedPosition
    // } else {
      return { x: 0, y: 0 }
    }
  // },
})

export default router
