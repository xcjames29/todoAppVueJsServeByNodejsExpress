

var app = new Vue({
    el: '#app',
    data:{
        todoList: ["give","take","run","swim"],
        finishedTask: [],
        sample:"sample"
    },
    methods:{
        addToList: function(){
            let todoInput = document.getElementById("todoInput");
            if(todoInput.value){
                console.log("list?",this.todoList);
                this.todoList.push(todoInput.value);
                todoInput.value="";
            }
            else{
                window.alert("Please enter to do!");
            }
        },
        deleteFromList: function(todo){
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index,1);
        },
        finishTodo: function(todo){
            console.log(this.finishedTask);
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index,1);
            this.finishedTask.push(todo);
        }
    }
});
