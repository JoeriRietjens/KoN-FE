<template>
  <div id="app"> 
    <!--<AddTodo v-on:add-todo="addTodo"/>
    //<Todos v-bind:todos="todos" 
    v-on:del-todo="deleteTodo" />
    -->

    
    <Order/>
    
  </div>
</template>
 
<script>

//import Todos from '../components/Todos.vue';
//import AddTodo from '../components/AddTodo';
import Order from '../components/Orders';

export default {
  name: "Home",
  components: {

    //Todos,
    //AddTodo,
    Order,
  },
  
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2,
          title: "Todo Two",
          completed: false
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false
        }
      ],
      orders: []
    }
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos, newTodo];
    },
    addOrder(newOrder){
      this.orders = [...this.orders, newOrder];
    }

  }

}
</script>

<style>

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn{
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover{
    background: #666;
  }

</style>
