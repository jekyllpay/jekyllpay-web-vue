<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-flex xs12 sm12>
          <v-btn block color="blue lighten-3" class="text-capitalize">Checkout Page</v-btn>
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
            <v-flex xs6 sm3>
              <v-text-field v-model="payment.amount" label="Amount"></v-text-field>
            </v-flex>
            <v-flex xs6 sm3 hide-details>
              <v-autocomplete
                label="Currency"
                v-model="payment.currency"
                :items="currencyList"
                :filter="matchStartingChars"
              ></v-autocomplete>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                :value="payment.order_id"
                label="Order ID, Read Only. If you don't have it, that's fine."
                readonly
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12>
          <v-textarea
            label="Comments"
            v-model="payment.comments"
            placeholder="Make some comments here"
            rows="3"
            hide-details
          ></v-textarea>
        </v-flex>

        <logo-grid></logo-grid>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LogoGrid from "@/components/common/LogoGrid";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    LogoGrid
  },
  mounted() {
    this.payment.order_id = this.currentOrderId || this.$route.query.orderid;
  },
  computed: {
    ...mapGetters("orderid", {
      currentOrderId: "getOrderId"
    })
  },
  data: () => ({
    currencyList: ["USD"],
    payment: {
      order_id: null,
      first_name: null,
      last_name: null,
      amount: null,
      currency: "USD",
      std_unit: "dollar",
      min_unit: "cent",
      comments: null,
      pay_method: null
    }
  }),
  methods: {
    ...mapActions("orderid", {
      updateOrderId: "updateOrderId"
    }),
    goToRoute(routeName) {
      this.$router.push({ name: routeName });
    },
    matchStartingChars(item, queryText, itemText) {
      console.log(item, queryText, itemText);
    }
  }
};
</script>

<style>
</style>
