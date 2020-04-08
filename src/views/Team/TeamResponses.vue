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
                        <v-expansion-panels light>
                            <v-expansion-panel v-for="(item, i) in teamInfo[selectedTeam]" :key="i">
                                <v-expansion-panel-header>{{i}}</v-expansion-panel-header>
                                <v-expansion-panel-content>{{item}}</v-expansion-panel-content>
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
        name: "TeamResponses",
        props: {
            teamInfo: {
                type: Object,
                required: false
            },
            selectedTeam: {
                type: String,
                required: false
            }
        },
        mounted(){
            this.onTeamResponsesPage();
        },
        data (){
            return{
                // teamInfo: {
                //     'Team 1': {
                //         'Taylor Grant': "No response yet",
                //         'Zach Tucker': "No response yet",
                //         'Dan Murray': "No response yet"
                //     },
                //     'Team 2': {
                //         'Connor': "No response yet",
                //         'Carter': "No response yet",
                //         'Menz': "No response yet",
                //     },
                //     'Team 3': {
                //         "Yasmine Elglaly": "No response yet"
                //     }
                // },
                teamNames: ['Team 1', 'Team 2', 'Team 3'],
                // selectedTeam: 'Team 1',
                overlayValue: true,
                overlayAbsolute: true
            }
        },
        methods: {
            onTeamResponsesPage: function(){
                this.$emit('toggleTabLock', true);
            }
        }
    }
</script>

<style scoped>
    .team_share_buttons{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
</style>