
<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-flex xs12 sm12 class="px-0">
          <v-btn
            block
            color="blue lighten-3"
            class="text-capitalize elevation-0 review-page-title-btn"
          >Review & Pay</v-btn>
        </v-flex>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">Review & Pay</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" v-if="payment_status === 'off'">Success</v-stepper-step>
            <v-stepper-step step="2" v-else-if="payment_status === 'loading'">Pending</v-stepper-step>
            <v-stepper-step
              step="2"
              :complete="payment_status === 'success'"
              v-else-if="payment_status === 'success'"
            >Success</v-stepper-step>
            <v-stepper-step step="2" v-else>Failure</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-btn
                        block
                        color="blue lighten-4"
                        class="text-capitalize elevation-0 review-page-title-btn"
                      >Order Info</v-btn>
                    </v-flex>
                    <template v-for="(field, index) in Object.keys(paymentFields)">
                      <v-flex xs12 sm6 :key="index" class="text-xs-center">
                        <v-text-field
                          :label="paymentFields[field]"
                          :value="payment[field]"
                          readonly
                          placeholder=" "
                          hide-details
                        ></v-text-field>
                      </v-flex>
                    </template>

                    <v-flex xs12>
                      <v-textarea
                        :value="payment.message"
                        label="Message"
                        placeholder="No message"
                        readonly
                        hide-details
                        rows="6"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex xs12 class="text-xs-center mt-3">
                  <v-btn color="primary" @click="step = 2" class="text-capitalize">Confirm and Pay</v-btn>
                  <v-btn flat @click="goToRoute('Checkout')" class="text-capitalize">Revise Order</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
                </v-flex>
                <v-flex xs12 class="text-xs-center mt-3">
                  <v-btn color="primary" @click="step = 1">Continue</v-btn>
                  <v-btn flat>Cancel</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import { getDiscount } from "@/utils/api";
export default {
  name: "Review",
  mounted() {
    getDiscount()
      .then(discount => (this.discount = discount))
      .catch(err => console.log(err));
  },
  computed: {
    ...mapGetters("payment", {
      payment: "getPayment"
    })
  },
  data: () => ({
    discount: 0,
    paymentFields: {
      order_id: "Order Id",
      promotion_code: "Promotion Code",
      first_name: "First Name",
      last_name: "Last Name",
      amount: "Amount",
      currency: "Currency",
      email: "Email"
    },

    step: 0,
    payment_status: "off" // ['off', 'loading', 'success', 'failure']
  }),
  methods: {
    goToRoute(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>


<style scoped>
.review-page-title-btn {
  pointer-events: none;
}
</style>
