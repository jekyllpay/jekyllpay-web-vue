<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex xs12 sm8>
        <v-flex xs12>
          <v-btn block color="blue lighten-3" class="text-capitalize">Payment Page</v-btn>
        </v-flex>

        <v-flex xs12 sm12>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field v-model="payment.first_name" label="First Name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field v-model="payment.last_name" label="Last Name"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field v-model="payment.amount" label="Amount"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 hide-details>
              <!-- <v-text-field v-model="payment.currency" label="Currency"></v-text-field> -->
              <v-autocomplete label="Currency" v-model="payment.currency" :items="currencyList"></v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12>
          <v-textarea
            label="Comments"
            v-model="payment.comments"
            placeholder="Make some comments here"
          ></v-textarea>
        </v-flex>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    currencyList: ["USD"],
    payment: {
      first_name: null,
      last_name: null,
      amount: 0,
      currency: "USD",
      stdUnit: "dollar",
      minUnit: "cent",
      comments: null,
      paymethod: null
    }
  }),
  methods: {
    goToRoute(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style>
</style>
