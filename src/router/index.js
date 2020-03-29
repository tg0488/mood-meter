import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TeamHome from '../views/TeamHome'
import Journal from '../views/Journal'
import PersonalLog from '../views/PersonalLog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TeamHome',
    name: 'TeamHome',
    component: TeamHome
  },
  {
      path: '/Journal',
      name: 'Journal',
      component: Journal
  },
  {
      path: '/PersonalLog',
      name: 'PersonalLog',
      component: PersonalLog
  },
  {
      path: '/PersonalEntry',
      name: 'PersonalEntry',
      component: PersonalEntry
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
