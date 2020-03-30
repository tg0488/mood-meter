<template>
    <v-container>
        <v-layout>
            <v-row style="width: 100%">
                <v-col cols="6">
                    <v-btn class="team_join_create_buttons" outlined large color="black">Join Team</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="team_join_create_buttons" outlined large to="CreateTeam">Create Team</v-btn>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout text-center class="py-6">
            <v-row style="width: 100%">
                <v-col cols="12">
                    <v-text-field hide-details label="Enter Code" outlined></v-text-field>
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
                    <v-btn class="direction_buttons_left" large outlined to="/TeamHome">Back</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="direction_buttons_right" large outlined to="/TeamHome">Join</v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "JoinTeam"
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