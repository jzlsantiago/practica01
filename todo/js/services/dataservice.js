angular.module('todoApp')



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

this.saveTodos = function (todos) {
  console.log("Se grabaron " + todos.length + " tareas");
}
  this.helloConsole = function() {
    console.log("Hola a la consola");
  }

})
