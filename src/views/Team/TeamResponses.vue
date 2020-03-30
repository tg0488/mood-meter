<template>
    <v-container>
        <v-layout>
            <v-row>
                <v-col cols="12">
                    <h1>Team Responses</h1>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout>
            <v-row>
                <v-col cols="12">
                    <v-expansion-panels v-for="(item,i) in 5" :key="i" inset class="py-1">
                        <v-expansion-panel>
                            <v-expansion-panel-header>Team Member {{item}}</v-expansion-panel-header>
                            <v-expansion-panel-content>Team member response</v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout>
            <v-row>
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
        name: "TeamResponses"
    }
</script>

<style scoped>
    .team_share_buttons{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
</style>