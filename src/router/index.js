import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TeamHome from "../views/TeamHome";
import Journal from "../views/Journal";
import PersonalLog from "../views/PersonalLog";
import WrittenJournal from "../views/WrittenJournal";

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
    component: TeamResponses
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
