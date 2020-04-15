<template>
    <v-container sstyle="width: 90vh; height: 75vh">
        <v-card class="pa-3" light style="width: 100%; height: 100%;">
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
            <v-layout text-center>
                <v-row>
                    <v-col cols="12">
                        <span>I am feeling {{journal.word}} today</span>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout style="width: 100%;">
                <v-row>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined @click="close">Back</v-btn>
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
        name: "TeamPickAWord",
        props:[
            "selectedTeam"
        ],
        components: {GridBtn},
        data () {
            return{
                journal: {
                    word: '',
                    color: '',
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
            close: function(){
                this.$emit('closePickAWordOverlay', false);
            },
            log: function(){
                this.$store.dispatch('addTeamJournal',{'teamName': this.selectedTeam, 'teamMember':'Myself', 'journal':this.journal});
                this.$emit('closePickAWordOverlay', false);
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