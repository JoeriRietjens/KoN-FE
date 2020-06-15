<template>
    <div id="OverviewList">

        <ul v-for="user in Data" :key="user.id">
            Name: {{user.name}} 

            <li v-for="order in user.orders" :key="order.id" >

                <ul v-for="product in order.products" :key="product.id">
                    Product: {{product.productType}} | Sugar: {{product.sugar}} | Milk: {{product.milk}}
                </ul>

            </li>
            <br>
        </ul>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "overview",

    data(){
        return{
            Data: [],
            order: '',
            
        };
    },

    async created(){
        try{
            const res = await axios.get("https://localhost:44320/api/Products/all")
            this.Data = res.data;
            console.log();
        }
        catch(e){
            console.error(e);
        }
    }

}
</script>