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
                        <v-text-field hide-details label="Enter Join Code" outlined></v-text-field>
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
                        <v-btn class="direction_buttons_right" large outlined>Join</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "JoinTeam",
        methods: {
            closeJoinTeam: function(){
                this.$emit('closeJoinTeamOverlay', false);
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