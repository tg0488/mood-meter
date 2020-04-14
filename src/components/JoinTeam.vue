<template>
    <v-container>
        <v-card class="pa-3" light>
            <v-layout>
                <v-row style="width:100%">
                    <v-col cols="12">
                        <h3>Join a Team By:</h3>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout text-center>
                <v-row justify="space-around" style="width: 100%">
                    <v-col cols="12">
                        <v-text-field v-model="joinCode" hide-details label="Enter Join Code" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <h3>Or</h3>
                    </v-col>
                    <v-col cols="12">
                        <a>Scan QR code</a>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout>
                <v-row style="width: 100%;">
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined @click="closeJoinTeam">Back</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_right" large outlined @click="joinTeam">Join</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "JoinTeam",
        data(){
          return{
              joinCode: ''
          }
        },
        methods: {
            closeJoinTeam: function(){
                this.$emit('closeJoinTeamOverlay', false);
            },
            joinTeam: function(){
                var validname = false;
                var teamJoinCode = this.joinCode;
                var curTeamMembers = this.$store.getters.getTeamMembers(teamJoinCode);
                var allTeams = this.$store.getters.getAllTeams;
                for(var key in allTeams){
                    if(key == teamJoinCode){
                        validname = true;
                        break;
                    }
                }
                if(!validname){
                    console.log('Team ' + teamJoinCode + ' does not exist');
                    return 0
                }
                var yourTeams = this.$store.getters.getYourTeams;
                for(var k in yourTeams){
                    if(k == teamJoinCode){
                        validname = false;
                        console.log('You are already on team ' + teamJoinCode);
                        break;
                    }
                }
                if(validname){
                    this.$store.dispatch('joinTeam', {'teamName':teamJoinCode, 'teamMembers':curTeamMembers});
                    console.log('Team ' + teamJoinCode + ' has been joined');
                    this.$emit('newTeamJoined')
                }
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
    .direction_buttons_left{
        width: 85%;
        margin-left: 10%;
        margin-right: 5%;
    }
    .direction_buttons_right{
        width: 85%;
        margin-left: 5%;
        margin-right: 10%;
    }
</style>