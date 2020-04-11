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
                <create-team :teams="teamInfo" v-on:closeCreateTeamOverlay="toggleCreateTeamOverlay" v-on:addNewTeam="addNewTeam"></create-team>
              </v-overlay>
              <v-overlay absolute :value="joinTeamOverlay">
                <join-team v-on:closeJoinTeamOverlay="toggleJoinTeamOverlay"></join-team>
              </v-overlay>
          </v-col>
          <v-col cols="5">
            <v-select v-model="selectedTeam" :items="teamNames" label="Choose a Team:" outlined></v-select>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large to="/Journal">Share A Word</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large to="/Journal">Share A Color</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large to="/WrittenJournal">Share A Journal</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn class="team_share_buttons" outlined x-large :to="{name:'TeamResponses', params: {teamInfo: teamInfo, selectedTeam: selectedTeam}}">View Team Responses</v-btn>
          </v-col>
        </v-row>
    </v-layout>
    <v-layout>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-btn class="team_share_buttons" outlined rounded x-large to="/">Back</v-btn>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-layout>

  </v-container>
</template>

<script>
    import JoinTeam from '../../components/JoinTeam'
    import CreateTeam from '../../components/CreateTeam'
    import {mapState} from 'vuex'
    export default {
        name: "TeamHome",
        props: {
        },
        components: {
            JoinTeam,
            CreateTeam
        },
        mounted() {
            this.onTeamHomePage();
            this.readTeamsFromStore();
        },
        computed: mapState({
            teams: state => state.teams.yourTeams
        }),
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
              createTeamOverlay: false
          }
        },
        methods: {
            readTeamsFromStore: function(){
                var teamNames = this.getAllTeamNames(this.teams);
                this.teamNames = teamNames;
                this.selectedTeam = this.teamNames[0];
            },
            toggleJoinTeamOverlay: function(value){
                this.joinTeamOverlay = value;
                this.onTeamHomePageOverlay(value);
            },
            toggleCreateTeamOverlay: function(value){
                this.createTeamOverlay = value;
                this.onTeamHomePageOverlay(value);
            },
            addNewTeam: function(value){
                this.teamInfo = value;
                this.teamNames = this.getAllTeamNames(this.teamInfo);
                this.toggleCreateTeamOverlay(false);
                // console.log(this.teamInfo);
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