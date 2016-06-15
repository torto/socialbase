(function() {
  'use strict';
  socialBaseAngular.directive('todoListItem', [todoListItem]);

  function todoListItem() {
    return {
      restrict: 'E',
      scope: {
        element: '@'
      },
      templateUrl: 'js/directives/todo/item/TodoListItemView.html',
      link: function(scope, params, algo) {

      }
    };
  }
}());
