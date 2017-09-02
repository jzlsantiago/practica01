var app = angular.module('todoApp',[])
.controller('mainCtrl', function ($scope, dataService) {
$scope.helloConsole = dataService.helloConsole;

  $scope.helloworld = function(){
    console.log("Hola a todos");
  }

  $scope.addTodo = function() {
    var todo = {name: "Ir al banco"}
    $scope.todos.push(todo);
  }

  $scope.saveTodo = function(todo) {
    todo.edited = false;
    dataService.saveTodo(todo);
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

.directive('helloWorld', function(){
  return {
    template: "Hola desde la directiva hello-world",
    restrict: "E"
  }
})

.service('dataService', function($http) {

this.getTodos = function (callback) {
  $http.get('js/mock/todos.json').then(callback);
}


this.deleteTodo = function (todo) {
  console.log("La tarea: " + todo.name + " fue eliminada");
}

this.saveTodo = function (todo) {
  console.log("La tarea: " + todo.name + " fue grabada");
}

  this.helloConsole = function() {
    console.log("Hola a la consola");
  }

})
