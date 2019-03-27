<template>
  <v-app>
    <v-toolbar app fixed dense>
      <v-btn fab right light small>
        <v-avatar size="32px" tile>
          <img src="@/assets/logo.png" alt="Vuetify">
        </v-avatar>
      </v-btn>
      <v-toolbar-title class="mx-0">
        <span>Jekyll Pay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fas fa-bell</v-icon>
      </v-btn>
      <v-speed-dial left direction="bottom" open-on-hover transition="slide-y-reverse-transition">
        <v-btn slot="activator" color="blue darken-2" dark fab small>
          <v-icon>account_circle</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn fab dark color="green" small>
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn fab dark color="indigo" small>
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn fab dark color="red" small>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/common/Footer";
export default {
  name: "App",
  components: {
    Footer
  },
  data: () => ({})
};
</script>
