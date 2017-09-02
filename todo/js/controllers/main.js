angular.module('todoApp')

.controller('mainCtrl', function ($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.helloworld = function(){
    console.log("Hola a todos");
  }

  $scope.addTodo = function() {
    var todo = {name: "Ir al banco"}
    $scope.todos.push(todo);  /** al final agregar **/

    /**  $scope.todos.unshift(todo); al inicio agregar  **/
  }

  $scope.saveTodo = function(todo) {
    todo.edited = false;
    dataService.saveTodo(todo);
  }


  $scope.saveTodos = function() {
    var editedTodos = $scope.todos.filter(
      function (todo) {
        if(todo.edited){
          todo.edited = false;
          return todo;
        }

      }
    );

    dataService.saveTodos(editedTodos);

  }

  $scope.deleteTodo = function(todo, index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index,1);
  }
  
  dataService.getTodos( function(response) {
    console.log(response.data);
    $scope.todos = response.data;

  })
  /**
  $scope.todos = [
  { "name": "Dejar la cama hecha antes de salir de casa" },
  { "name": "Doblar y guardar la ropa en los armarios" },
  { "name": "Hacer ejercicios" }
]
_**/
})

.controller('secondCtrl', function ($scope) {
  $scope.whoami = function(){
    console.log("soy yo");
  }

  $scope.helloworld = function(){
    console.log("Hola a todos desde el segundo");
  }



})
