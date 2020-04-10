<template>
  <v-container style="width:100vh; height: 100vh;" fluid>
    <v-layout style="width: 100%;">
      <v-row>
        <v-col cols="12">
            <h2>What best describes how you are feeling?</h2>
            <hr style="width: 60%" size="4">
        </v-col>
      </v-row>
    </v-layout>
    <v-layout style="width: 100%;">
        <v-row>
            <v-col cols="12">
              <v-tabs :color="journalInfo.color" grow :slider-color="journalInfo.color">
                <v-tab ripple>
                  Color Chart
                </v-tab>
                <v-tab ripple>
                  Word Chart
                </v-tab>
                <v-tab-item>
                  <v-card class="ma-1" flat>
                    <v-row class="button_row" no-gutters>
                      <gridbtn v-on:change="change" :size="6" :number="2" :btncolor="['red', 'yellow']"></gridbtn>
                      <gridbtn v-on:change="change" :size="6" :number="2" :btncolor="['blue','green']"></gridbtn>
                    </v-row>
                  </v-card>

                </v-tab-item>
                <v-tab-item>
                  <v-card class="ma-1" flat>
                      <v-row class="button_row" no-gutters>
                            <v-col cols="6">
                                <v-row class="button_row" no-gutters wrap>
                                    <gridbtn v-on:change="change" :number="rwords.length" :size="6" :mdsize="3" :btncolor="'red'" :words="rwords"></gridbtn>
                                </v-row>
                                <v-row class="button_row" no-gutters wrap>
                                    <gridbtn v-on:change="change" :number="bwords.length" :size="6" :mdsize="3" :btncolor="'blue'" :words="bwords"></gridbtn>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row class="button_row" no-gutters wrap>
                                  <gridbtn v-on:change="change" :number="ywords.length" :size="6" :mdsize="3" :btncolor="'yellow'" :words="ywords"></gridbtn>
                                </v-row>
                                <v-row class="button_row" no-gutters wrap>
                                  <gridbtn v-on:change="change" :number="gwords.length" :size="6" :mdsize="3" :btncolor="'green'" :words="gwords"></gridbtn>
                                </v-row>
                            </v-col>
                      </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-col>
        </v-row>
    </v-layout>
    <v-layout style="width: 100%;">
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined to="/">Back</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn v-if="!journalInfo.word == ''" class="direction_buttons_right" large outlined :to="{name:'WrittenJournal',params:{journal:journalInfo}}">Write about feeling {{journalInfo.word}}</v-btn>
                        <v-btn v-else-if="!journalInfo.color == ''"  class="direction_buttons_right" large outlined :to="{name:'WrittenJournal',params:{journal:journalInfo}}">Write about feeling {{journalInfo.color}}</v-btn>
                        <v-btn v-else disabled class="direction_buttons_right" large outlined></v-btn>
                    
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import gridbtn from './gridbtn.vue'
    export default {
        name: "Journal",
        data () {
          return {
            journalInfo: {
              color: "",
              word: "",
              },
            rwords: ['Enraged','Panicked','Stressed','Jittery','Shocked','Livid','Furious','Frustrated','Tense','Stunned','Fuming','Frightened','Angry','Nervous','Restless','Repulsed','Troubled','Concerned','Uneasy','Peeved'],
            bwords: ['Disgusted','Glum','Disappointed','Down','Apathetic','Pessimistic','Morose','Discouraged','Sad','Bored','Alienated','Miserable','Lonely','Disheartened','Tired','Despondent','Depressed','Sullen','Exhausted','Fatigued'],
            ywords: ['Suprised','Upbeat','Festive','Exhilarated','Ecstatic','Hyper','Cheerful','Motivated','Inspired','Elated','Energized','Lively','Enthusiastic','Optimistic','Excited','Pleasant','Joyful','Hopeful','Playful','Blissful'],
            gwords: ['At Ease','Easygoing','Content','Loving','Fulfilled','Calm','Secure','Satisfied','Grateful','Touched','Relaxed','Chilled','Restful','Blessed','Balanced','Mellow','Thoughtful','Peaceful','Comfy','Carefree']
          }
        },
        components: {
          gridbtn
        },
        methods: {
          change: function(value, color) {
            this.journalInfo.word = value;
            this.journalInfo.color = color;
          }
        }
    };
</script>

<style scoped>
    .button_row{
        width: 100%;
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
