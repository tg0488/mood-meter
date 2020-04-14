<template>
  <v-app>
    <v-app-bar
            app
            dark
            src="https://i.picsum.photos/id/477/1920/1080.jpg">
        <template v-slot:img="{ props }">
          <v-img
                  v-bind="props"
                  gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
          ></v-img>
        </template>
        <v-toolbar-title>Insert Title Here</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs dark>
            <v-tab to="/" :disabled="tabsLocked">Journal</v-tab>
            <v-tab to="/PersonalLog" :disabled="tabsLocked">Personal Log</v-tab>
            <v-tab to="/teamHome" :disabled="tabsLocked">Team Home</v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
    <v-content>
      <router-view v-on:toggleTabLock="toggleTabsLocked"></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
    name: 'App',

    components: {
    },
    data: () => ({
        tabsLocked: false,
        tab: 'Journal'
    }),
    methods: {
        toggleTabsLocked: function(value){
            this.tabsLocked = value;
        }
    }
};
</script>
