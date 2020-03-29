<template>
  <v-container>
    <v-layout>
      <v-row style="width: 100%">
        <v-col cols="6">
          <v-btn class="team_join_create_buttons" outlined large to="JoinTeam">Join Team</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn class="team_join_create_buttons" outlined large to="CreateTeam">Create Team</v-btn>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout>
        <v-row wrap style="width: 100%">
          <v-col cols="5">
            <v-select outlined :items="teams"></v-select>
          </v-col>
          <v-col cols="7"></v-col>
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
            <v-btn class="team_share_buttons" outlined x-large to="TeamResponses">View Team Responses</v-btn>
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
    export default {
        name: "TeamHome",
        components: {
        },
        data (){
          return{
              teams: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'],
              overlayValue: true,
              overlayAbsolute: true
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