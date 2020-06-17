<template>
    <h1></h1>
</template>

<script>
import axios from "axios";

export default {
    name: "overview",

    data(){
        return{
            Orders: [],
        };
    },

    async created(){
        try{
            const res = await axios.get("")
            this.Orders = res.data;
            console.log();
        }
        catch(e){
            console.error(e);
        }
    }

}
</script>