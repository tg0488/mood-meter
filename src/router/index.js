import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Journal from '../views/Journal'
import WrittenJournal from '../views/WrittenJournal'
import PersonalLog from '../views/PersonalLog'
import TeamHome from '../views/Team/TeamHome'
import TeamResponses from '../views/Team/TeamResponses'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Journal',
        name: 'Journal',
        component: Journal
    },
    {
        path: '/WrittenJournal',
        name: 'WrittenJournal',
        component: WrittenJournal
    },
    {
        path: '/PersonalLog',
        name: 'PersonalLog',
        component: PersonalLog
    },
    {
        path: '/TeamHome',
        name: 'TeamHome',
        component: TeamHome
    },
    {
        path: '/TeamResponses',
        name: 'TeamResponses',
        component: TeamResponses,
        props: true
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

