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
              <v-tabs color="green" grow slider-color="cyan">
                <v-tab ripple>
                  Color Chart
                </v-tab>
                <v-tab ripple>
                  Word Chart
                </v-tab>
                <v-tab-item>
                  <v-card class="ma-1" flat>
                    <v-row class="button_row" no-gutters>
                      <v-row class="button_row" no-gutters>
                        <v-col cols="6">
                          <v-btn width="100%" height="180px" flat tile color="red"></v-btn>
                        </v-col>
                        <v-col cols="6">
                          <v-btn width="100%" height="180px" flat tile color="yellow"></v-btn>
                        </v-col>
                      </v-row>
                      <v-row class="button_row" no-gutters>
                        <v-col cols="6">
                          <v-btn width="100%" height="180px" flat tile color="blue"></v-btn>
                        </v-col>
                        <v-col cols="6">
                          <v-btn width="100%" height="180px" flat tile color="green"></v-btn>
                        </v-col>
                      </v-row>
                    </v-row>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="ma-1" flat>
                      <v-row class="button_row" no-gutters>
                            <v-col cols="6">
                                <v-row class="button_row" no-gutters wrap>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Enraged</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Panicked</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Stressed</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Jittery</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Shocked</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Livid</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Furious</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Frustrated</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Tense</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Stunned</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Fuming</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Frightened</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Angry</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Nervous</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Restless</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Repulsed</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Troubled</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Concerned</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Uneasy</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="red" >Peeved</v-btn></v-col>
                                </v-row>
                                <v-row class="button_row" no-gutters wrap>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Suprised</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Upbeat</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Festive</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Exhilarated</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Ecstatic</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Hyper</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Cheerful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Motivated</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Inspired</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Elated</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Energized</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Lively</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Enthusiastic</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Optimistic</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Excited</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Pleasant</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Joyful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Hopeful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Playful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="yellow">Blissful</v-btn></v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row class="button_row" no-gutters wrap>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Disgusted</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Glum</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Disappointed</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Down</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Apathetic</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Pessimistic</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Morose</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Discouraged</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Sad</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Bored</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Alienated</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Miserable</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Lonely</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Disheartened</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Tired</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Despondent</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Depressed</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Sullen</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Exhausted</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="blue">Fatigued</v-btn></v-col>
                                </v-row>
                                <v-row class="button_row" no-gutters wrap>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">At Ease</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Easygoing</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Content</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Loving</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Fulfilled</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Calm</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Secure</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Satisfied</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Grateful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Touched</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Relaxed</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Chilled</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Restful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Blessed</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Balanced</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Mellow</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Thoughtful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Peaceful</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Comfy</v-btn></v-col>
                                    <v-col cols="6" md="3"><v-btn style="width: 100%" flat tile color="green">Carefree</v-btn></v-col>
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
                        <v-btn class="direction_buttons_right" large outlined to="/WrittenJournal">Next</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "Journal"
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
