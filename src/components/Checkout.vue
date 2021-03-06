<template>
  <v-container fluid grid-list-md>
    <alert-message :msg="checkout_msg"></alert-message>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-flex xs12 sm12>
          <v-btn
            block
            color="blue lighten-3"
            class="text-capitalize elevation-0 checkout-page-btn"
          >Checkout Page</v-btn>
        </v-flex>

        <v-flex xs12 sm12>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                v-model="payment.email"
                label="Email *"
                v-validate="'required|email'"
                name="email"
                :error-messages="err_msg.email"
                @keyup="resetErrMsgOnKeyUp('email')"
              ></v-text-field>
            </v-flex>

            <v-flex xs6 sm3>
              <v-text-field
                v-model="payment.amount"
                label="Amount *"
                v-validate="'required|decimal:2'"
                name="amount"
                :error-messages="err_msg.amount"
                @keyup="resetErrMsgOnKeyUp('amount')"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 sm3>
              <v-autocomplete
                label="Currency"
                v-model="payment.currency"
                :items="currencyList"
                :filter="matchStartingCharsOnly"
                dense
              >
                <template v-slot:no-data>
                  <v-list-tile>
                    <v-list-tile-title>Currency Not Found</v-list-tile-title>
                  </v-list-tile>
                </template>
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12>
          <v-layout row wrap>
            <v-flex xs6 sm3>
              <v-text-field
                v-model="payment.first_name"
                label="First Name *"
                v-validate="'required'"
                name="first name"
                :error-messages="err_msg['first name']"
                @keyup="resetErrMsgOnKeyUp('first name')"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 sm3>
              <v-text-field
                v-model="payment.last_name"
                label="Last Name *"
                v-validate="'required'"
                name="last name"
                :error-messages="err_msg['last name']"
                @keyup="resetErrMsgOnKeyUp('last name')"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field v-model="payment.phone" label="Phone"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                :value="payment.order_id"
                label="Order ID"
                readonly
                background-color="grey lighten-3"
                placeholder="Read Only"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field v-model="payment.promotion_code" label="Promotion Code (Optional)"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12>
          <v-textarea
            label="Message"
            v-model="payment.message"
            placeholder="Leave a message here"
            rows="3"
            hide-details
          ></v-textarea>
        </v-flex>

        <logo-grid @logoSelected="updateLogo" :logo_name="logo_name"></logo-grid>

        <v-flex xs12 sm12>
          <v-layout row justify-center>
            <v-flex xs6 sm2>
              <v-btn block color="primary" class="text-capitalize" @click="onReview()">Next</v-btn>
            </v-flex>
            <v-flex xs6 sm2>
              <v-btn block class="text-capitalize" @click="resetEverything()">Reset</v-btn>
            </v-flex>
            <!-- <v-flex xs6 sm4>
              <v-btn
                block
                color="primary"
                class="text-capitalize"
                @click="onReview('Review')"
              >Review</v-btn>
            </v-flex>-->
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LogoGrid from "@/components/common/LogoGrid";
import AlertMessage from "@/components/common/AlertMessage";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Checkout",
  components: {
    LogoGrid,
    AlertMessage
  },
  mounted() {
    this.initPayment();
  },
  watch: {
    payment: {
      handler: function(val) {
        this.updatePayment({
          currentPayment: val
        });
        this.logo_name = val.pay_method;
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
    checkout_msg: {},
    err_msg: {
      "first name": [],
      "last name": [],
      email: [],
      amount: []
    },
    currencyList: ["USD", "BTC", "CNY", "EUR", "GBP", "HKD", "JPY"], // must be UPPERCASE
    payment: {
      order_id: null,
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      amount: null,
      currency: "USD", // must be UPPERCASE
      std_unit: "dollar",
      min_unit: "cent",
      promotion_code: null,
      message: null,
      pay_method: null
    },
    logo_name: null
  }),
  methods: {
    ...mapActions("orderid", {
      updateOrderId: "updateOrderId"
    }),
    ...mapActions("payment", {
      updatePayment: "updatePayment"
    }),
    initPayment() {
      this.payment =
        this.$store.getters["payment/getPayment"] === null
          ? Object.assign(this.payment, this.$route.query)
          : this.$store.getters["payment/getPayment"];
    },
    async validatePayment() {
      let flag1 = this.payment.pay_method;
      let flag2 = await this.$validator.validate();

      if (!flag1) {
        this.checkout_msg = {
          snackbar: true,
          icon: "fas fa-exclamation-circle",
          timeout: 2000,
          text: "Choose a Payment Method!"
        };
      }

      if (!flag2) {
        // console.log(this.$validator.errors.items);
        this.$validator.errors.items.forEach(item => {
          this.err_msg[item.field] = [item.msg];
        });
      }

      return !!flag1 && !!flag2;
    },
    async onReview() {
      let isPaymentValid = await this.validatePayment();
      if (isPaymentValid) {
        this.goToRoute("Review");
      }
    },
    goToRoute(routeName) {
      this.$router.push({ name: routeName });
    },
    matchStartingCharsOnly(item, queryText, itemText) {
      return itemText.toLowerCase().startsWith(queryText.toLowerCase());
    },
    updateLogo(selected_logo) {
      this.payment.pay_method = selected_logo.is_selected
        ? selected_logo.name
        : null;
    },
    resetErrMsgOnKeyUp(fieldName) {
      this.err_msg[fieldName] = [];
    },
    resetEverything() {
      this.resetErrorMessages();
      this.resetPayment();
    },
    resetErrorMessages() {
      this.err_msg = {
        "first name": [],
        "last name": [],
        email: [],
        amount: []
      };
    },
    resetPayment() {
      this.payment = {
        order_id: null,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        amount: null,
        currency: "USD", // must be UPPERCASE
        std_unit: "dollar",
        min_unit: "cent",
        promotion_code: null,
        message: null,
        pay_method: null
      };
    }
  }
};
</script>

<style>
.checkout-page-btn {
  pointer-events: none;
}

.v-list__tile.v-list__tile--link.theme--light.v-list__tile--highlighted {
  background-color: yellow !important;
}

.v-list__tile__mask {
  background-color: yellow !important;
}
</style>
