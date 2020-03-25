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
        <v-layout>
            <v-row style="width: 100%">
                <v-col cols="12">
                    <v-text-field label="Enter Code" outlined></v-text-field>
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
            <v-row style="width: 100%">
                <v-col cols="2"></v-col>
                <v-col cols="8">
                    <v-btn class="team_share_buttons" outlined rounded x-large to="TeamHome">Back</v-btn>
                </v-col>
                <v-col cols="2"></v-col>
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
</style>