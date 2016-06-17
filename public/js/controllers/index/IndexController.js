(function() {
  'use strict';
  socialBaseAngular.controller('IndexController', ['$scope', 'IndexService', IndexController]);

  function IndexController($scope, IndexService) {
    function init() {
      setVariables();
      setMethods();

      getElements();
      watchList();
    }

    function setVariables() {
      $scope.title = 'TODO-List';
      $scope.isList = true;
      $scope.todoListElements = [];
    }

    function setMethods(){
    }

    function getElements(){
      $scope.todoListElements = IndexService.getList();
    }

    function watchList(){
      $scope.$watchCollection('todoListElements', function() {
        IndexService.setListStorage($scope.todoListElements, function(response){
          $scope.todoListElements = response;
        }, true);
      });
    }

  init();
  }
}());
