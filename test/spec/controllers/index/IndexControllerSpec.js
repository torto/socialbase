describe('IndexController', function() {
  beforeEach(module('socialbase'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Initialize', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {
        '$watchCollection': function(elem, el){}
      };
      controller = $controller('IndexController', { $scope: $scope });
    });
    it('verificar dados inicializados', function() {
      expect($scope.title).toEqual('TODO-List');
      expect($scope.isList).toEqual(true);
      expect($scope.todoListElements.length).toEqual(0);
    });
  });
});
