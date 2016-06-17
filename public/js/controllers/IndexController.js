(function() {
  'use strict';
  socialBaseAngular.controller('IndexController', ['$scope', IndexController]);

  function IndexController($scope) {
    function init() {
      setVariables();
      setMethods();
    }

    function setVariables() {
      $scope.title = 'TODO-List';
      $scope.isList = true;
      $scope.todoListElements = [{
        isChecked:false,
        description: 'testeeeee'
      }];
    }

    function setMethods(){
    }
    init();
  }
}());
