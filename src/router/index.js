import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../components/Orders.vue'
import Overview from '../components/Overview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/Overview', name: 'Overview', component: Overview},
  { path: '/Orders', name: 'Orders', component: Orders}
]

const router = new VueRouter({
  routes
})

export default router
