<template></template>

<script>
export default {
  name: "DwollaGateway",
  mounted() {
    if (window.Dwolla) {
      this.initDwolla();
    } else {
      let dwollaScript = document.createElement("script");
      dwollaScript.src = "https://cdn.dwolla.com/1/dwolla.js";
      document.body.appendChild(dwollaScript);
      dwollaScript.addEventListener(
        "load",
        function() {
          this.initDwolla();
        }.bind(this)
      );
    }
  },
  methods: {
    initDwolla() {
      console.log("initDwolla");
    }
  },
  beforeDestroy() {
    window.Dwolla = null;
  }
};
</script>
