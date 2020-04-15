<template>
  <v-container>
    <v-layout>
      <v-row style="width: 100%">
        <v-col cols="6">
          <v-btn class="team_join_create_buttons" outlined large @click="toggleJoinTeamOverlay(true)">Join Team</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn class="team_join_create_buttons" outlined large @click="toggleCreateTeamOverlay(true)">Create Team</v-btn>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout>
        <v-row wrap style="width: 100%">
          <v-col cols="12">
              <v-overlay absolute :value="createTeamOverlay">
                <create-team v-on:closeCreateTeamOverlay="toggleCreateTeamOverlay" v-on:newTeamAdded="newTeamAdded"></create-team>
              </v-overlay>
              <v-overlay absolute :value="joinTeamOverlay">
                <join-team v-on:closeJoinTeamOverlay="toggleJoinTeamOverlay" v-on:newTeamJoined="newTeamJoined"></join-team>
              </v-overlay>
              <v-overlay absolute :value="pickAColorOverlay" style="width: 100%; height: 100%;">
                <team-pick-a-color :selectedTeam="selectedTeam" v-on:closePickAColorOverlay="togglePickAColorOverlay"></team-pick-a-color>
              </v-overlay>
              <v-overlay absolute :value="pickAWordOverlay" style="width: 100%; height: 100%;">
                <team-pick-a-word :selectedTeam="selectedTeam" v-on:closePickAWordOverlay="togglePickAWordOverlay"></team-pick-a-word>
              </v-overlay>
              <v-overlay absolute :value="fullJournalOverlay" style="width: 100%; height: 100%;">
                  <team-full-journal :selectedTeam="selectedTeam" v-on:closeFullJournalOverlay="toggleFullJournalOverlay"></team-full-journal>
              </v-overlay>
          </v-col>
          <v-col cols="5">
            <v-select v-model="selectedTeam" :items="teamNames" label="Choose a Team:" outlined></v-select>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large @click="togglePickAWordOverlay(true)">Share A Word</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large @click="togglePickAColorOverlay(true)">Share A Color</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large @click="toggleFullJournalOverlay(true)">Share A Journal</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large :to="{name:'TeamResponses', params: {selectedTeam: selectedTeam}}">View Team Responses</v-btn>
          </v-col>
        </v-row>
    </v-layout>
  </v-container>
</template>

<script>
    import JoinTeam from '../../components/JoinTeam'
    import CreateTeam from '../../components/CreateTeam'
    import TeamPickAColor from "../../components/Team/TeamPickAColor";
    import TeamPickAWord from "../../components/Team/TeamPickAWord";
    import TeamFullJournal from "../../components/Team/TeamFullJournal";
    export default {
        name: "TeamHome",
        props: {
        },
        components: {
            TeamFullJournal,
            TeamPickAColor,
            TeamPickAWord,
            JoinTeam,
            CreateTeam
        },
        mounted() {
            this.onTeamHomePage();
            this.readTeamsFromStore();
        },
        computed: {
            teams() {
                return this.$store.getters.getYourTeams;
            }
        },
        data (){
          return{
              teamInfo: {
                  'Team 1': {
                      'Taylor Grant': "No response yet",
                      'Zach Tucker': "No response yet",
                      'Dan Murray': "No response yet"
                  },
                  'Team 2': {
                      'Connor': "No response yet",
                      'Carter': "No response yet",
                      'Menz': "No response yet",
                  },
                  'Team 3': {
                      "Yasmine Elglaly": "No response yet"
                  }
              },
              teamNames: [],
              selectedTeam: 'Team 1',
              joinTeamOverlay: false,
              createTeamOverlay: false,
              pickAColorOverlay: false,
              pickAWordOverlay: false,
              fullJournalOverlay: false
          }
        },
        methods: {
            readTeamsFromStore: function(){
                var teamNames = this.getAllTeamNames(this.teams);
                this.teamNames = teamNames;
                this.selectedTeam = this.teamNames[1];
            },
            toggleJoinTeamOverlay: function(value){
                this.joinTeamOverlay = value;
                this.onTeamHomePageOverlay(value);
            },
            toggleCreateTeamOverlay: function(value){
                this.createTeamOverlay = value;
                this.onTeamHomePageOverlay(value);
            },
            togglePickAColorOverlay: function(value){
                this.pickAColorOverlay = value;
                this.onTeamHomePageOverlay(value);
            },
            togglePickAWordOverlay:function(value){
                this.pickAWordOverlay = value;
                this.onTeamHomePageOverlay(value);
            },
            toggleFullJournalOverlay: function(value){
                this.fullJournalOverlay = value;
                this.onTeamHomePageOverlay(value)
            },
            newTeamAdded: function(){
                this.teamNames = this.getAllTeamNames(this.teams);
                this.toggleCreateTeamOverlay(false);
            },
            newTeamJoined: function(){
                this.teamNames = this.getAllTeamNames(this.teams);
                this.toggleJoinTeamOverlay(false);
            },
            getAllTeamNames: function(teamDict){
                var name = [] ;
                for(var key in teamDict){
                    name.push(key);
                }
                return name;
            },
            onTeamHomePage: function(){
                this.$emit('toggleTabLock', false);
            },
            onTeamHomePageOverlay: function(value){
                this.$emit('toggleTabLock', value);
            }
        }
    }
</script>

<style scoped>
  .team_join_create_buttons{
    width: 100%;
  }
  .team_share_buttons{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>