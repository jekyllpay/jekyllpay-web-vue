<template>
  <v-flex xs12 sm12>
    <v-layout row wrap>
      <template v-for="(logo,index) in logos">
        <v-flex :key="index" xs4 sm2>
          <v-layout row align-center>
            <v-flex xs8 class="text-xs-center">
              <v-avatar tile color="grey lighten-4">
                <img :src="imgsrc(logo)" :alt="logo.name">
              </v-avatar>
            </v-flex>
            <v-flex xs4>
              <v-checkbox v-model="logo.is_selected" @click.stop.prevent="selectLogo(logo)"></v-checkbox>
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
  props: {
    logo_name: {
      type: String
    }
  },
  watch: {
    logo_name: function(val) {
      console.log(val);
      if (val) {
        this.logos.forEach(logo => {
          if (logo.name == val) {
            logo.is_selected = true;
          } else {
            logo.is_selected = false;
          }
        });
      } else {
        this.logos.forEach(logo => (logo.is_selected = false));
      }
    }
  },
  data: () => ({
    logos: [
      { name: "visa", file: "visa.png", is_selected: false },
      { name: "mastercard", file: "mastercard.jpg", is_selected: false },
      {
        name: "americanexpress",
        file: "americanexpress.png",
        is_selected: false
      },
      { name: "discover", file: "discover.jpg", is_selected: false },
      { name: "paypal", file: "paypal.jpg", is_selected: false },
      { name: "bitpay", file: "bitpay.png", is_selected: false },
      { name: "unionpay", file: "unionpay.png", is_selected: false },
      { name: "alipay", file: "alipay.jpg", is_selected: false },
      { name: "wechat", file: "wechat.jpg", is_selected: false },
      { name: "jcb", file: "jcb.png", is_selected: false }
    ]
  }),
  methods: {
    imgsrc(logo) {
      return require("@/assets/logos/" + logo.file);
    },
    selectLogo(selected_logo) {
      this.logos.forEach(logo => {
        if (logo.name == selected_logo.name) {
          logo.is_selected = !logo.is_selected;
        } else {
          logo.is_selected = false;
        }
      });
      this.$emit("logoSelected", selected_logo);
    }
  }
};
</script>

