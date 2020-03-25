<template>
  <v-container style="height:100%;">
    <v-layout>
      <v-row justify="center">
        <v-col cols="8">
          <v-btn class="home_main_buttons" large outlined to="Journal">Journal</v-btn>
        </v-col>
        <v-col cols="8">
          <v-btn class="home_main_buttons" large outlined to="PersonalLog">View Log</v-btn>
        </v-col>
        <v-col cols="8">
          <v-btn class="home_main_buttons" large outlined to="TeamHome">Team Home</v-btn>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
  .home_main_buttons{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
