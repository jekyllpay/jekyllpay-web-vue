<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-flex xs12 sm12>
          <v-btn
            block
            color="blue lighten-3"
            class="text-capitalize elevation-0 home-page-btn"
          >Home Page</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.home-page-btn {
  pointer-events: none;
}
</style>
