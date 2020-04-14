<template>
  <v-container>
    <v-layout text-center>
      <!--<v-row justify="center">-->
        <!--<v-col cols="8">-->
          <!--<v-btn class="home_main_buttons" large outlined to="Journal">Journal</v-btn>-->
        <!--</v-col>-->
        <!--<v-col cols="8">-->
          <!--<v-btn class="home_main_buttons" large outlined to="PersonalLog">View Log</v-btn>-->
        <!--</v-col>-->
        <!--<v-col cols="8">-->
          <!--<v-btn class="home_main_buttons" large outlined to="TeamHome">Team Home</v-btn>-->
        <!--</v-col>-->
      <!--</v-row>-->
        <v-row>
          <v-col class="pa-0" cols="12">
            <v-row justify="space-around">
              <v-col class="pa-0" cols="8">
                  <span style="font-size: 48px">Welcome</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-0" cols="12">
            <v-row justify="space-around">
              <v-col class="pa-0" cols="8">
                <span style="font-size: 48px"><b>Username</b></span>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-0" cols="12">
            <v-row justify="space-around">
              <v-col class="pa-0" cols="12">
                <span style="font-size: 32px">How are you today?</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="my-3" cols="12">
            <v-row justify="space-around">
              <v-col cols="8">
                <v-btn outlined x-large to="/Journal">Journal</v-btn>
              </v-col>
            </v-row>
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
    },
    mounted() {
        this.onHomePage();
    },
    methods: {
        onHomePage: function(){
            this.$emit('toggleTabLock', false);
        },
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
