<template>
  <v-flex xs12 sm12>
    <v-layout row wrap>
      <template v-for="i in Object.keys(logos)">
        <v-flex :key="i" xs4 sm2>
          <v-layout row align-center>
            <v-flex xs8 class="text-xs-center">
              <v-avatar tile color="grey lighten-4">
                <img :src="imgsrc(i)" :alt="i">
              </v-avatar>
            </v-flex>
            <v-flex xs4>
              <v-checkbox v-model="logos[i].is_selected" @click.stop="selectlogo(i)"></v-checkbox>
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
  data: () => ({
    logos: {
      visa: { file: "visa.png", is_selected: false },
      mastercard: { file: "mastercard.jpg", is_selected: false },
      americanexpress: { file: "americanexpress.png", is_selected: false },
      discover: { file: "discover.jpg", is_selected: false },
      paypal: { file: "paypal.jpg", is_selected: false },
      bitpay: { file: "bitpay.png", is_selected: false },
      alipay: { file: "alipay.jpg", is_selected: false },
      wechat: { file: "wechat.jpg", is_selected: false },
      jsb: { file: "jcb.png", is_selected: false }
    }
  }),
  methods: {
    imgsrc(i) {
      return require("@/assets/logos/" + this.logos[i].file);
    },
    selectlogo(i) {
      Object.keys(this.logos).forEach(key => {
        if (key == i) {
          this.logos[i].is_selected = !this.logos[i].is_selected;
        } else {
          this.logos[key].is_selected = false;
        }
      });
      this.$emit("logo-selected", i, this.logos[i].is_selected);
    }
  }
};
</script>

