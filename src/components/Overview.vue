<template>
<<<<<<< HEAD
    <h1></h1>
=======
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
>>>>>>> fded1f6bcb6ae616c4fc2971ac15a8ddf223d3d8
</template>

<script>
import axios from "axios";

export default {
    name: "overview",

    data(){
        return{
<<<<<<< HEAD
            Orders: [],
=======
            Data: [],
            order: '',
            
>>>>>>> fded1f6bcb6ae616c4fc2971ac15a8ddf223d3d8
        };
    },

    async created(){
        try{
<<<<<<< HEAD
            const res = await axios.get("")
            this.Orders = res.data;
=======
            const res = await axios.get("https://localhost:44320/api/Products/all")
            this.Data = res.data;
>>>>>>> fded1f6bcb6ae616c4fc2971ac15a8ddf223d3d8
            console.log();
        }
        catch(e){
            console.error(e);
        }
    }

}
</script>