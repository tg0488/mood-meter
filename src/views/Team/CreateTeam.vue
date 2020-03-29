<template>
    <v-container>
        <v-layout>
            <v-row style="width: 100%">
                <v-col cols="6">
                    <v-btn class="team_join_create_buttons" outlined large to="JoinTeam">Join Team</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="team_join_create_buttons" outlined large>Create Team</v-btn>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout>
            <v-row style="width: 100%">
                <v-row justify="space-around" style="width: 100%">
                    <v-col cols="6">
                        <v-text-field outlined hide-details placeholder="Team Name"></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="space-around" style="width: 100%">
                    <v-col></v-col>
                    <v-col cols="7" v-for="(item,i) in numberOfTeamMembers" :key="i">
                        <v-text-field outlined hide-details placeholder="Team Member Email"></v-text-field>
                    </v-col>
                    <v-col cols="7">
                        <v-btn outlined rounded x-large>+</v-btn>
                    </v-col>
                </v-row>
            </v-row>
        </v-layout>
        <v-layout>
            <v-row style="width: 100%;">
                <v-col cols="6">
                    <v-btn class="direction_buttons_left" large outlined to="/TeamHome">Back</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="direction_buttons_right" large outlined to="/TeamHome">Save</v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CreateTeam",
        data () {
            return {
                numberOfTeamMembers: 3
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