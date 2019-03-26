<template>
  <v-flex xs12 sm12>
    <v-layout row wrap>
      <template v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]">
        <v-flex :key="i" xs4 sm2>
          <v-layout row justify-center>
            <v-flex xs8 class="text-xs-center">
              <v-avatar :tile="true" color="grey lighten-4">
                <img src="@/assets/logo.png" alt="avatar">
              </v-avatar>
            </v-flex>
            <v-flex xs4>
              <v-checkbox></v-checkbox>
            </v-flex>
          </v-layout>
        </v-flex>
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

