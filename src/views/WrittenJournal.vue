<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col cols="12">
          <h1>Why do you feel that way?</h1>
        </v-col>
        <v-col cols="12">
          <v-textarea outlined rows="10" color=""></v-textarea>
        </v-col>
        <v-col cols="12">
            <v-btn width="50%" to="/Journal">Back</v-btn>
            <v-btn width="50%" to="/">Next</v-btn>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WrittenJournal"
};
</script>

<style scoped></style>
