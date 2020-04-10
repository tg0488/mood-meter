<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col cols="12">
          <h2>Why do you feel {{ journal.word }}</h2>
          <hr style="width: 60%" size="4" />
        </v-col>
        <v-col cols="12">
          <v-textarea :value="textcontent" outlined rows="10" color=""></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <v-btn class="direction_buttons_left" large outlined to="/Journal"
                >Back to journal</v-btn
              >
            </v-col>
            <!--<v-btn width="33%" large outlined to="/">Skip Journal</v-btn>-->
            <v-col cols="6">
              <v-btn class="direction_buttons_right" large outlined to="/"
                >Next</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WrittenJournal",
  props: {
    journal: {
      color: String,
      word: String,
      }
  },
  data() {
    return {
      textContent: ""
    };
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style scoped>
.direction_buttons_left {
  width: 85%;
  margin-left: 10%;
  margin-right: 5%;
}
.direction_buttons_right {
  width: 85%;
  margin-left: 5%;
  margin-right: 10%;
}
</style>
