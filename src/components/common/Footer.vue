<template>
  <v-footer color="blue lighten-3" app inset>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-layout :justify-center="$vuetify.breakpoint.name == 'xs'">
          <v-btn flat round class="black--text text-xs-center text-capitalize">
            <strong>&copy;{{ new Date().getFullYear() }} Jekyll Pay</strong>
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs4 sm2 v-for="(link, index) in links" :key="index" class="hidden-sm-and-down">
        <v-btn
          class="black--text text-capitalize"
          flat
          round
          @click="goToRoute(link.routeName)"
        >{{ link.name }}</v-btn>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      { name: "Contact Us", routeName: "ContactUs" },
      { name: "Teams Of Use", routeName: "MetaTermsOfUse" },
      { name: "Privacy Policy", routeName: "MetaPrivacyPolicy" }
    ]
  }),
  methods: {
    goToRoute(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>