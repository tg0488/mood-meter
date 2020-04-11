import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Journal from '../views/Journal'
import WrittenJournal from '../views/WrittenJournal'
import PersonalLog from '../views/PersonalLog'
import PersonalEntry from '../views/PersonalEntry'
import TeamHome from '../views/Team/TeamHome'
import TeamResponses from '../views/Team/TeamResponses'
import JoinTeam from '../views/Team/JoinTeam'
import CreateTeam from '../views/Team/CreateTeam'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/TeamHome",
    name: "TeamHome",
    component: TeamHome
  },
  {
    path: "/Journal",
    name: "Journal",
    component: Journal
  },
  {
    path: "/PersonalLog",
    name: "PersonalLog",
    component: PersonalLog
  },
  {
    path: "/PersonalEntry",
    name: "PersonalEntry",
    component: PersonalEntry
  },
  {
    path: "/WrittenJournal",
    name: "WrittenJournal",
    component: WrittenJournal,
    props: true
  },
  {
    path: "/TeamResponses",
    name: "TeamResponses",
    component: TeamResponses,
    props: true
  },
  {
    path: "/JoinTeam",
    name: "JoinTeam",
    component: JoinTeam
  },
  {
    path: "/CreateTeam",
    name: "CreateTeam",
    component: CreateTeam
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
