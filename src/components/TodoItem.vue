<template>
    <div class="Todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p>
           <input type="checkbox" v-on:change="markComplete">
           {{todo.title}}
           <button @click="$emit('del-todo',todo.id)">x</button>
        </p>
    </div>
</template>

<script>
export default {
     name: "Todo Item",
     props: ["todo"],
     methods:{
         markComplete(){
             this.todo.completed =!this.todo.completed;
         }
     }  
}
</script>


<style scoped>

.Todo-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete{
    text-decoration: line-through;
}
</style>