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
                            <v-expansion-panel v-for="(item, i) in teams[selectedTeam]" :key="i">
                                <v-expansion-panel-header>{{i}}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card :color="item.color" style="min-height: 10px">
                                        {{item.word}}
                                    </v-card>
                                    {{item.written}}
                                </v-expansion-panel-content>
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
            selectedTeam: {
                type: String,
                required: false
            }
        },
        mounted(){
            this.onTeamResponsesPage();
            this.checkTeams();
        },
        computed: {
            teams() {
                return this.$store.getters.getYourTeams;
            }
        },
        data (){
            return{
                teamNames: ['Team 1', 'Team 2', 'Team 3'],
                overlayValue: true,
                overlayAbsolute: true,
            }
        },
        methods: {
            onTeamResponsesPage: function(){
                this.$emit('toggleTabLock', true);
            },
            checkTeams: function(){
                console.log(this.teams);
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