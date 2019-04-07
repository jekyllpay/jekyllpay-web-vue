<template>
  <v-layout row wrap>
    <!-- <div id="cc_or_qr_info" style="width:100%"></div> -->
    <v-flex xs12>
      <div id="stripe-card-number"></div>
    </v-flex>
    <v-flex xs4>
      <div id="stripe-card-expiry"></div>
    </v-flex>
    <v-flex xs4>
      <div id="stripe-card-cvc"></div>
    </v-flex>
    <v-flex xs4>
      <v-text-field v-model="cardZip" placeholder="Zip Code"></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "StripeGateway",
  mounted() {
    if (window.Stripe) {
      this.initStripe();
    } else {
      let stripeScript = document.createElement("script");
      stripeScript.src = "https://js.stripe.com/v3/";
      document.body.appendChild(stripeScript);
      stripeScript.addEventListener(
        "load",
        function() {
          this.initStripe();
        }.bind(this)
      );
    }
  },
  computed: {
    ...mapGetters("payment", {
      payment: "getPayment"
    })
  },
  data: () => ({
    stripe: null,
    elements: null,
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardZip: null
    // card: null,
  }),
  methods: {
    initStripe() {
      this.stripe = window.Stripe("pk_test_l1Wc9afPVQu7MyUUEzqH2Ids");
      this.elements = this.stripe.elements({ locale: "auto" });
      this.cardNumber = this.elements.create("cardNumber");
      this.cardNumber.mount("#stripe-card-number");
      this.cardExpiry = this.elements.create("cardExpiry");
      this.cardExpiry.mount("#stripe-card-expiry");
      this.cardCvc = this.elements.create("cardCvc");
      this.cardCvc.mount("#stripe-card-cvc");
      // this.card = this.elements.create("card", { style: style });
      // // this.card.mount(this.$el.querySelector("#cc_or_qr_info"));
      // this.card.mount("#cc_or_qr_info");
    },
    async submit() {
      let additionalData = {
        name: this.payment.first_name + " " + this.payment.last_name,
        address_zip: this.cardZip
      };
      const { token, error } = await this.stripe.createToken(
        this.cardNumber,
        additionalData
      );
      console.log(token, error);
    }
  }
};
</script>

<style>
</style>


