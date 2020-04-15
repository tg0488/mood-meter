<template>
    <v-container style="width: 90vh; height: 75vh">
        <v-card id="picker" class="pa-3" light style="width: 100%; height: 100%; visibility: visible; position: absolute">
            <v-layout>
                <v-tabs>
                    <v-tab ripple>
                        Color Chart
                    </v-tab>
                    <v-tab ripple>
                        Word Chart
                    </v-tab>
                    <v-tab-item>
                        <v-layout>
                            <v-row style="width:100%">
                                <v-col cols="12">
                                    <grid-btn v-on:change="change" :size="6" :number="2" :btncolor="['red', 'yellow']"></grid-btn>
                                    <grid-btn v-on:change="change" :size="6" :number="2" :btncolor="['blue','green']"></grid-btn>
                                </v-col>
                            </v-row>
                        </v-layout>
                    </v-tab-item>
                    <v-tab-item>
                        <v-layout>
                            <v-row style="width:100%" no-gutters>
                                <v-col cols="6">
                                    <v-row class="button_row" no-gutters wrap>
                                        <grid-btn v-on:change="change" :number="rwords.length" :size="6" :mdsize="3" :btncolor="'red'" :words="rwords"></grid-btn>
                                    </v-row>
                                    <v-row class="button_row" no-gutters wrap>
                                        <grid-btn v-on:change="change" :number="bwords.length" :size="6" :mdsize="3" :btncolor="'blue'" :words="bwords"></grid-btn>
                                    </v-row>
                                </v-col>
                                <v-col cols="6">
                                    <v-row class="button_row" no-gutters wrap>
                                        <grid-btn v-on:change="change" :number="ywords.length" :size="6" :mdsize="3" :btncolor="'yellow'" :words="ywords"></grid-btn>
                                    </v-row>
                                    <v-row class="button_row" no-gutters wrap>
                                        <grid-btn v-on:change="change" :number="gwords.length" :size="6" :mdsize="3" :btncolor="'green'" :words="gwords"></grid-btn>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-layout>
                    </v-tab-item>
                </v-tabs>
            </v-layout>
            <v-layout text-center>
                <v-row>
                    <v-col cols="12">
                        <span v-if="!(journal.word == '')">I am feeling {{journal.word}} today</span>
                        <span v-else-if="!(journal.color == '')">I am feeling {{journal.color}} today</span>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout style="width: 100%;">
                <v-row>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined @click="close">Back</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_right" large outlined @click="goToJournal">Next</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
        </v-card>
        <v-card id="written" class="pa-3" light style="width: 100%; height: 100%; visibility: hidden; position: absolute">
            <v-layout>
                <v-row>
                    <v-col cols="12">
                        <h2 v-if="!(journal.word == '')">Why do you feel {{ journal.word }}</h2>
                        <h2 v-else-if="!(journal.color=='')">Why do you feel {{journal.color}}</h2>
                        <h2 v-else>Why do you feel that way</h2>
                        <hr :color="this.$store.getters.getLastColor" style="width: 60%" size="4" />
                    </v-col>
                    <v-col cols="12">
                        <v-textarea v-model="writtenJ" outlined></v-textarea>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout style="width: 100%;">
                <v-row>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined @click="backToPick">Back</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_right" large outlined @click="log">Log</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    import GridBtn from "../gridbtn";
    export default {
        name: "TeamFullJournal",
        props: [
            'selectedTeam'
        ],
        components: {GridBtn},
        data () {
            return {
                journal: {
                    color: '______',
                    word: '',
                    written: ''
                },
                rwords: ['Enraged','Panicked','Stressed','Jittery','Shocked','Livid','Furious','Frustrated','Tense','Stunned','Fuming','Frightened','Angry','Nervous','Restless','Repulsed','Troubled','Concerned','Uneasy','Peeved'],
                bwords: ['Disgusted','Glum','Disappointed','Down','Apathetic','Pessimistic','Morose','Discouraged','Sad','Bored','Alienated','Miserable','Lonely','Disheartened','Tired','Despondent','Depressed','Sullen','Exhausted','Fatigued'],
                ywords: ['Suprised','Upbeat','Festive','Exhilarated','Ecstatic','Hyper','Cheerful','Motivated','Inspired','Elated','Energized','Lively','Enthusiastic','Optimistic','Excited','Pleasant','Joyful','Hopeful','Playful','Blissful'],
                gwords: ['At Ease','Easygoing','Content','Loving','Fulfilled','Calm','Secure','Satisfied','Grateful','Touched','Relaxed','Chilled','Restful','Blessed','Balanced','Mellow','Thoughtful','Peaceful','Comfy','Carefree']
            }
        },
        methods: {
            change: function(value, color) {
                this.journal.word = value;
                this.journal.color = color;
            },
            goToJournal: function(){
                document.getElementById("picker").style.visibility = "hidden";
                document.getElementById("written").style.visibility = "visible";
            },
            backToPick: function(){
                document.getElementById("picker").style.visibility = "visible";
                document.getElementById("written").style.visibility = "hidden";
            },
            close: function(){
                this.$emit('closeFullJournalOverlay', false);
            },
            log: function(){
                this.journal.written = this.writtenJ;
                this.$store.dispatch('addTeamJournal',{'teamName': this.selectedTeam, 'teamMember':'Myself', 'journal':this.journal});
                this.$emit('closeFullJournalOverlay', false);
            }
        }
    }
</script>

<style scoped>
    .direction_buttons_left{
        width: 85%;
        margin-left: 10%;
        margin-right: 5%;
        font-size: medium;
        text-align: center;
    }
    .direction_buttons_right{
        width: 85%;
        margin-left: 5%;
        margin-right: 10%;
        font-size: medium;
        text-align: center;
    }
</style>