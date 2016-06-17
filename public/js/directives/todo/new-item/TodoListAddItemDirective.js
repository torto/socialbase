(function() {
  'use strict';
  socialBaseAngular.directive('todoListAddItem', [todoListAddItem]);

  function todoListAddItem() {
    return {
      restrict: 'E',
      scope: {
        listItem: '=list'
      },
      templateUrl: 'js/directives/todo/new-item/TodoListAddItemView.html',
      link: function(scope, params, algo) {
        function init() {
          setVariables();
          setMethods();
        }

        function setMethods(){
          scope.addItem = addItem;
          scope.addItemEnter = addItemEnter;
        }

        function setVariables() {
          scope.newItem = '';
        }

        function cleanValues(){
          scope.newItem = '';
        }

        function addItemInArray(){
          scope.listItem.push({description: scope.newItem, isChecked: false});
        }

        function addItem(){
          addItemInArray();
          cleanValues();
        }

        function addItemEnter(event){
          if(event.keyCode === 13){
            addItem();
          }
        }

        init();
      }
    };
  }
}());
