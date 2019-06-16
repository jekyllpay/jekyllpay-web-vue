<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div id="bt-card-number"></div>
        </v-flex>
        <v-flex xs4>
            <div id="bt-expiration-date"></div>
        </v-flex>
        <v-flex xs4>
            <div id="bt-card-cvc"></div>
        </v-flex>
        <v-flex xs4>
            <div id="bt-zip-code"></div>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios';
import {client, hostedFields} from 'braintree-web';
export default {
    name:"Braintree",
    async mounted(){
        this.client_token = await getClientToken();
        let clientInstance = await client.create({ authorization: this.client_token});
        hostedFields.create();
    },
    data: ()=>({
        client_token : ''
    }),
    methods:{
        async getClientToken(){

        }
    }
}
</script>
