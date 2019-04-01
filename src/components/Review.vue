
<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-flex xs12 sm12 class="px-0">
          <v-btn
            block
            color="blue lighten-3"
            class="text-capitalize elevation-0 review-pay-btn"
          >Review & Pay</v-btn>
        </v-flex>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">Review & Pay</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" v-if="payment_status === 'success'">Success</v-stepper-step>
            <v-stepper-step step="2" v-else-if="payment_status === 'loading'">Pending</v-stepper-step>
            <v-stepper-step step="2" v-else>Failure</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="primary" @click="step = 2">Continue</v-btn>

              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="primary" @click="step = 1">Continue</v-btn>

              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Review",
  data: () => ({
    step: 0,
    payment_status: "success" // ['success', 'loading', 'failure']
  })
};
</script>


<style>
.review-pay-btn {
  pointer-events: none;
}
</style>
