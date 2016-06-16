(function() {
  'use strict';
  socialBaseAngular.directive('todoListItem', [todoListItem]);

  function todoListItem() {
    return {
      restrict: 'E',
      scope: {
        listItem: '=list'
      },
      templateUrl: 'js/directives/todo/item/TodoListItemView.html',
      link: function(scope, params, algo) {
        scope.removeItem = removeItem;
        scope.cancelRemoveItem = cancelRemoveItem;

        function removeItem(elem, index){
          scope.listItem.splice(index, 1);
        }

        function cancelRemoveItem(elem, index){
          alert('cancel');
        }
      }
    };
  }
}());
