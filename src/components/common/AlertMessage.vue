<template>
  <v-layout>
    <v-flex>
      <v-snackbar v-model="msg.show" top color="msg.color" :timeout="msg.timeout">
        <v-icon color="pink">{{ msg.icon}}</v-icon>
        {{msg.text}}
        <v-btn color="pink" flat @click="msg.show=false">Close</v-btn>
      </v-snackbar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "AlertMessage",
  props: {
    msg: {
      required: true,
      type: Object
    }
  },
  data: () => ({})
};
</script>

