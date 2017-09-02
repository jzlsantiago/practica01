angular.module('todoApp')

.directive('helloWorld', function(){
  return {
    template: "Hola desde la directiva hello-world",
    restrict: "E"
  }
})

.directive ('todos', function()
{
  return  {
    templateUrl: "js/templates/todos.html"
  }
})
