"use strict";

// Our controller
function TodoController() {
  const vm = this;
  vm.todoList = [{
      task: "Go Food Shopping",
      completed: true
    },
    {
      task: "Wash My Car",
      completed: false
    }, {
      task: "Lift Weights",
      completed: true
    }, {
      task: "Hang Out With My Family",
      completed: true
    }, {
      task: "Wash Dishes",
      completed: false
    }
  ]

  vm.addList = function (item) {
    vm.todoList.push({
      task: item,
      completed: false,
    });

    vm.removeList = (index, item) => {
      vm.todoList.splice(index, 1);
    }
  }


  vm.completeTask = function (index) {
    vm.todoList[index].completed = true;
    
  }

};
// Write another function to erase items from the array.






// Using the getter syntax to bring in our module and declaring the controller.
angular
  .module("todoApp")
  .controller("TodoController", TodoController)