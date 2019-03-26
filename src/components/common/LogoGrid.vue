<template>
  <v-avatar :tile="tile" :size="avatarSize" color="grey lighten-4">
    <img src="@/assets/logo.png" alt="avatar">
  </v-avatar>
</template>

<script>
export default {
  name: "LogoGrid",
  computed: {
    avatarSize() {
      return `${this.slider}px`;
    }
  },
  data: () => ({
    slider: 56,
    tile: true
  })
};
</script>

