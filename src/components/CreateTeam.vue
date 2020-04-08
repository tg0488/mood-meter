<template>
    <v-container style="width: 100%; height: 100%;">
        <v-card class="pa-3" light>
            <v-layout>
                <v-row style="width:100%">
                    <v-col cols="12">
                        <h3>Create A Team:</h3>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout text-center>
                <v-row justify="space-around" style="width: 100%; min-height: 350px; max-height:350px; overflow-y: scroll;">
                    <v-col cols="5">
                        <v-text-field outlined hide-details placeholder="Team Name" v-model="newTeamName"></v-text-field>
                    </v-col>
                    <v-col cols="8" v-for="(item,i) in numberOfTeamMembers" :key="i">
                        <v-text-field outlined hide-details placeholder="Team Member Email" v-model="members[item]"></v-text-field>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout text-center>
                <v-row justify="center" style="width: 100%">
                    <v-col cols="3">
                        <v-btn outlined rounded @click="addTeamMember" style="max-width: 85%;">+</v-btn>
                    </v-col>
                    <v-col cols="3">
                        <v-btn outlined rounded @click="subTeamMember" style="max-width: 85%;">-</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout>
                <v-row style="width: 100%;">
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined rounded @click="closeCreateTeam">Back</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_right" large outlined rounded @click="createTeam">Save</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "CreateTeam",
        props:[
            'teams'
        ],
        computed: mapState({
            yourTeams: state => state.teams.yourTeams
        }),
        data () {
            return{
                numberOfTeamMembers: 3,
                members: [],
                maxTeamMembers: false,
                minTeamMembers: false,
                newTeamName: ''
            }
        },
        methods: {
            closeCreateTeam: function(){
                this.$emit('closeCreateTeamOverlay', false);
            },
            addTeamMember: function(){
                if(this.numberOfTeamMembers <= 5) {
                    this.numberOfTeamMembers += 1;
                }
                if(this.numberOfTeamMembers == 5){
                    this.maxTeamMembers = true;
                }
            },
            subTeamMember: function(){
                if(this.numberOfTeamMembers > 1){
                    this.numberOfTeamMembers -= 1
                }
                if(this.numberOfTeamMembers == 1){
                    this.minTeamMembers = true;
                }
            },
            createTeam: function(){
                var name = this.newTeamName;
                var validname = true;
                for(var key in this.teams){
                    if(key == name){
                        validname = false;
                        break;
                    }
                }
                if(name == ''){
                    validname = false;
                }
                if(validname) {
                    var updatedTeams = this.teams;
                    var newTeam = {};
                    for(var i in this.members){
                        newTeam[this.members[i]] = 'No Response Yet'
                    }
                    updatedTeams[name] = newTeam;
                    this.$store.dispatch('addTeam',name, newTeam);
                    // this.$emit('addNewTeam', updatedTeams);
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