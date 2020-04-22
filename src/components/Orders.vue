<template>
    <div id="orders">
        <li v-for="order in Orders" :key="order.productType">
            Coffee: {{order.productType}} | Sugar: {{order.sugar}} | Milk: {{order.milk}}
        </li>
        <form @submit="addOrder">
            <input type="text" v-model="Name" name="Name" placeholder="Your name">
            <input type="text" v-model="CoffeeType" name="CoffeeType" placeholder="What would you like to drink?">
            <input type="text" v-model="Sugar" name="Sugar" placeholder="Use less sugar you're sweet enough already">
            <input type="text" v-model="Milk" name="Milk" placeholder="Milk is for babies right?">
            <input type="submit" value="Add order" class="btn">
        </form>

    </div>
</template>

<script>
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "Orders",
    
    data(){
        return {
            Orders: []
        };
    },
    methods: {
        addOrder(e) {
            e.preventDefault();
            const newOrder = {
                id: uuidv4(),
                name: this.Name,
                coffeeType: this.CoffeeType,
                sugar: this.Sugar,
                milk: this.milk,
                
            }
            // Send up to parent.
            //this.$emit('add-Order', newOrder);
            this.Orders.push(newOrder)
            this.title = '';
        }
    },

    async created(){
    try{
        const res = await axios.get("https://localhost:44320/api/products");
        this.Orders = res.data; 
        console.log(this.Orders);
    }
    catch(e) {
        console.error(e);
        
    }

}

};
</script>   

<style scoped>
    form{
        display: flex;
    }
    input[type="text"]{
        flex: 10;
        padding: 5px;
    }
    input[type="submit"]{
       flex: 2; 
    }
        
</style>