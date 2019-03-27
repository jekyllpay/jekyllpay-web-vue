<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
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
              <v-text-field v-model="payment.amount" label="Amount" type="number"></v-text-field>
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
              <v-text-field :value="payment.order_id" label="Order ID, Read Only." readonly></v-text-field>
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
        <v-flex xs12 sm12>
          <v-layout row justify-center>
            <!-- <v-flex xs6 sm3 class="text-xs-right">
              <v-btn color="primary" class="text-capitalize">Review</v-btn>
            </v-flex>
            <v-flex xs6 sm3>
              <v-btn color="primary" class="text-capitalize">Submit</v-btn>
            </v-flex>-->
            <v-flex xs6 sm4 class="text-xs-center">
              <v-btn color="primary" class="text-capitalize" @click="goToRoute('Review')">Review</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
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
    this.payment = Object.assign(this.payment, this.$route.query);
  },
  watch: {
    payment: {
      handler: function(val) {
        this.updatePayment({
          currentPayment: val
        });
      },
      deep: true
    }
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
    ...mapActions("payment", {
      updatePayment: "updatePayment"
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
