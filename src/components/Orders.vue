<template>
    <div id="orders">
        <h3>{{SavedUsername}}</h3>
        <li v-for="order in products" :key="order.productType">
            Coffee: {{order.coffeeType}} | Sugar: {{order.sugar}} | Milk: {{order.milk}}
        </li>
        <form @submit="addOrder">
            <input type="text" v-model="CoffeeType" name="CoffeeType" placeholder="What would you like to drink?">
            <input type="text" v-model="Sugar" name="Sugar" placeholder="Use less sugar you're sweet enough already">
            <input type="text" v-model="Milk" name="Milk" placeholder="Milk is for babies right?">
            <input type="submit" value="Add order" class="btn">
        </form>

        <form @submit="addUsername">
            <input type="text" v-model="UserName" name="UserName" placeholder="Your name">
            <input type="submit" value="Add user" class="btn">
        </form>
        
        <input @click="submitOrder" type="submit" value="Place order" class="placeOrderbtn">

    </div>
</template>


<script>
import axios from "axios";
//import { v4 as uuidv4 } from 'uuid';

export default {
    name: "products",
    
    data(){
        return { 
            products: [],  
            user: {},   
            UserName: '',
            SavedUsername: '',

            CoffeeType: '',
            Sugar: '',
            Milk: '',
            //OrdersJson: ''
        };
    },
    methods: {
        addOrder(e) {
            e.preventDefault();
            const newOrder = {
                
                coffeeType: this.CoffeeType,
                sugar: this.Sugar,
                milk: this.Milk                
            }
            this.products = [...this.products, newOrder];
            //this.products.push(newOrder)


            this.coffeeType = '';
            this.sugar = '';
            this.milk = '';
        },
        addUsername(e){
            e.preventDefault();
            this.SavedUsername = this.UserName;
            
            const user = {
                username: this.SavedUsername
            }
            this.user = user;

            //this.products.push(this.SavedUsername)
        },
        submitOrder(){
            try{
                //console.log(this.products);
                //this.OrdersJson = JSON.stringify(this.products);
                //this.OrdersJson = JSON.parse(JSON.stringify(this.products))
                //console.log(this.OrdersJson);

                
                const productDTO = { ...this.user, "products": this.products};
                console.log(this.products)

            axios.post('https://localhost:44320/api/Products', JSON.stringify(productDTO), {headers:{'Content-Type':'application/json'}})

            
                    console.log(productDTO)
                    console.log(JSON.stringify(productDTO))

            //console.log("products send succesfully to api")
            }
            catch(e){
                console.log(e);
            }
        }
    },

    async created(){
    try{
        // const res = await axios.get("https://localhost:44320/api/products");
        // this.products = res.data; 
        // console.log(this.products);
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
    .placeOrderbtn{
    display: inline-block;
    border: none;
    border-radius: 0%;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    }
        
</style>