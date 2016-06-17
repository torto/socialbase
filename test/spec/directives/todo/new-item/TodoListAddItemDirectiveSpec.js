describe('TodoListAddItemDirective', function() {
  var $compile,
    $rootScope;

  beforeEach(module('socialbase'));
  beforeEach(module('js/directives/todo/new-item/TodoListAddItemView.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('Init scope', function() {

    it('de texto', function() {
      $rootScope.todoListElements = [{
        isChecked: true,
        description: 'teste texto exebido'
      }];
      $rootScope.newItem = '';

      var element = $compile('<todo-list-add-item list="todoListElements"></todo-list-add-item>')($rootScope);
      $rootScope.$digest();
      var input = $(element).find('[name=\'addItem\']').val();
      expect(input).toEqual('');
      expect($rootScope.newItem).toEqual('');
    });
  });
  describe('events change', function() {
    it('do input', function() {
      $rootScope.todoListElements = [{
        isChecked: true,
        description: 'teste texto exebido'
      }];
      $rootScope.newItem = '';

      var element = $compile('<todo-list-add-item list="todoListElements"></todo-list-add-item>')($rootScope);
      $rootScope.$digest();
      var input = $(element).find('[name=\'addItem\']');
      $rootScope.$apply(function() {
        angular.element(input).val('teste');
      });

      expect(input[0].value).toEqual('teste');
    });

    it('do botao adicionar', function() {
      $rootScope.todoListElements = [{
        isChecked: true,
        description: 'teste texto exebido'
      }];
      $rootScope.newItem = 'evento';
      $rootScope.addItem = jasmine.createSpy();

      var element = $compile('<todo-list-add-item list="todoListElements" add-item="addItem(item)"></todo-list-add-item>')($rootScope);
      $rootScope.$digest();
      $(element).find('a').click();
      expect(element.isolateScope().addItem).toBeDefined();
    });


  });

});
