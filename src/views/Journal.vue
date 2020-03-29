<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col>
          <h1>What best describes how you are feeling?</h1>
        </v-col>
        <v-col cols="12">
          <v-tabs color="green" grow slider-color="cyan">
            <v-tab ripple>
              Color Chart
            </v-tab>
            <v-tab ripple>
              Word Chart
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-actions>
                    <v-row no-gutters>
                        <v-col cols="12">
                      <v-btn width="50%" tile height="180px" color="red"></v-btn>
                      <v-btn width="50%" tile height="180px" color="yellow"></v-btn>
                    </v-col>
                    <v-col cols="12">
                      <v-btn width="50%" tile height="180px" color="blue"></v-btn>
                      <v-btn width="50%" tile height="180px" color="green"></v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                  <v-card-actions>
                      <v-row no-gutters>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="red">Enraged</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Panicked</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Stressed</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Jittery</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Shocked</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Suprised</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Upbeat</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Festive</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Exhilarated</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Ecstatic</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="red">Livid</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Furious</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Frustrated</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Tense</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Stunned</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Hyper</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Cheerful</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Motivated</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Inspired</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Elated</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="red">Fuming</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Frightened</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Angry</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Nervous</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Restless</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Energized</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Lively</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Enthusiastic</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Optimistic</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Excited</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="red">Repulsed</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Troubled</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Concerned</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Uneasy</v-btn>
                              <v-btn width="10%" tile height="40px" color="red">Peeved</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Pleasant</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Joyful</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Hopeful</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Playful</v-btn>
                              <v-btn width="10%" tile height="40px" color="yellow">Blissful</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="blue">Disgusted</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Glum</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Disappointed</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Down</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Apathetic</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">At Ease</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Easygoing</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Content</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Loving</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Fulfilled</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="blue">Pessimistic</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Morose</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Discouraged</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Sad</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Bored</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Calm</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Secure</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Satisfied</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Grateful</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Touched</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="blue">Alienated</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Miserable</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Lonely</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Disheartened</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Tired</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Relaxed</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Chilled</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Restful</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Blessed</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Balanced</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="blue">Despondent</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Depressed</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Sullen</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Exhausted</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Fatigued</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Mellow</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Thoughtful</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Peaceful</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Comfy</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Carefree</v-btn>
                          </v-col>
                          <v-col cols="12">
                              <v-btn width="10%" tile height="40px" color="blue">Despair</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Hopeless</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Desolate</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Spent</v-btn>
                              <v-btn width="10%" tile height="40px" color="blue">Drained</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Sleepy</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Compalacent</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Tranquil</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Cozy</v-btn>
                              <v-btn width="10%" tile height="40px" color="green">Serene</v-btn>
                          </v-col>
                      </v-row>
                  </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-col>
        <v-col cols="12">
          <v-btn width="33%" large outlined to="/">Back</v-btn>
          <v-btn width="33%" large outlined to="/">Skip Journal</v-btn>
          <v-btn width="33%" large outlined to="/WrittenJournal">Next</v-btn>
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
v-btn {
    width: fit-content;
}
</style>
