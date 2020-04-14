<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col cols="12">
          <h2 v-if="!(journal.word == '')">Why do you feel {{ journal.word }}</h2>
          <h2 v-else-if="!(journal.color=='')">Why do you feel {{journal.color}}</h2>
          <h2 v-else>Why do you feel that way</h2>
          <hr :color="this.$store.getters.getLastColor" style="width: 60%" size="4" />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            outlined
            rows="10"
            color=""
          ></v-textarea>
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
              <v-btn class="direction_buttons_right" large outlined @click="submit"
                >Submit Journal</v-btn
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
      default: function() {
        return {
          color: '',
          word: '',
        }
      }
    }
  },
methods: {
    submit: function() {
      var today = new Date();
      var id = this.$store.getters.numJournals;
      var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + id;
      this.$store.commit("ADD_JOURNAL", [date, this.journal.color, this.journal.word, this.message])
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.direction_buttons_left {
  width: 85%;
  margin-left: 10%;
  margin-right: 5%;
  font-size: small;
  text-align: center;
}
.direction_buttons_right {
  width: 85%;
  margin-left: 5%;
  margin-right: 10%;
  font-size: small;
  text-align: center;
  
}
</style>
