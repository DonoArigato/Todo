"use strict";

// Our controller
function TodoController() {
  const vm = this;
  vm.todoList = 
[
{
  task: "Go Food Shopping",
  completed: true
},
{
  task: "Wash My Car",
  completed: false
},{
  task:"Lift Weights",
  completed:true
},{
   task:"Hang Out With My Family",
   completed:true
},{
  task:"Wash Dishes",
  completed:false
}
]

};

// Using the getter syntax to bring in our module and declaring the controller.
angular
  .module("todoApp")
  .controller("TodoController",TodoController);