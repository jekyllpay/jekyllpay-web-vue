<template>
  <v-flex xs12 sm12>
    <v-layout row wrap>
      <template v-for="i in [1,2,3,4,5,6]">
        <v-avatar :tile="true" size="80px" color="grey lighten-4" :key="i">
          <img src="@/assets/logo.png" alt="avatar">
        </v-avatar>
      </template>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "LogoGrid",

  data: () => ({})
};
</script>

