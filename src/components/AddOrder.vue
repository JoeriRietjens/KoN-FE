<template>
    <div>
        <form @submit="addOrder">
            <input type="text" v-model="Name" name="Name" placeholder="Your name">
            <input type="text" v-model="CoffeeType" name="CoffeeType" placeholder="What would you like to drink?">
            <input type="text" v-model="Sugar" name="Sugar" placeholder="Use less sugar you're sweet enough already">
            <input type="text" v-model="Milk" name="Milk" placeholder="Milk is for baby's right?">
            <input type="submit" value="Add order" class="btn">
        </form>
    </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
    name: "AddOrder",
    data(){
        return{
            title: ''
        }
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
            this.$emit('add-Order', newOrder);

            this.title = '';
        }
    }
}
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

