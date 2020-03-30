<template>
  <v-app>
    <v-app-bar
            app
            dark
            src="https://i.picsum.photos/id/168/1920/1080.jpg">
        <v-toolbar-title>Insert Title Here</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs dark>
            <v-tab to="/">Journal</v-tab>
            <v-tab to="/PersonalLog">Personal Log</v-tab>
            <v-tab to="/teamHome">Team Home</v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
