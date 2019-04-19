<template>
  <v-layout>
    <v-flex xs12>
      <v-snackbar v-model="msg.snackbar" top color="msg.color" :timeout="msg.timeout">
        <v-icon color="pink">{{ msg.icon}}</v-icon>
        {{msg.text}}
        <v-btn color="pink" flat @click="msg.snackbar=false">Close</v-btn>
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

