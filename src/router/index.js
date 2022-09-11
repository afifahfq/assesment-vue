import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Calculator from '../views/Calculator.vue'
import People from '../views/People.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  },
  {
    path: '/people',
    name: 'people',
    component: People
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
