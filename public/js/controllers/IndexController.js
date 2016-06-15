(function() {
  'use strict';
  socialBaseAngular.controller('IndexController', ['$scope', IndexController]);

  function IndexController($scope) {
    function init() {
      setVariables();
    }

    function setVariables() {
      $scope.title = 'TODO-List';
      $scope.isList = true;
    }

    init();
  }
}());
