describe('TodoListItemDirective', function() {
  var $compile,
    $rootScope;

  beforeEach(module('socialbase'));
  beforeEach(module('js/directives/todo/item/TodoListItemView.html', 'js/directives/dialogs/confirm/ConfirmDialogView.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('Checando scopes', function() {

    it('se texto description esta exebindo', function() {
      $rootScope.todoListElements = [{
        isChecked: true,
        description: 'teste texto exebido'
      }];

      var element = $compile('<todo-list-item list="todoListElements"></todo-list-item>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain('teste texto exebido');
    });

    it('se o checkbox está como check', function() {
      $rootScope.todoListElements = [{
        isChecked: true,
        description: 'teste'
      }];

      var element = $compile('<todo-list-item list="todoListElements"></todo-list-item>')($rootScope);
      $rootScope.$digest();
      expect($(element).find('.check').length).toEqual(1);
      expect($(element).find('li').length).toEqual(1);
    });

    it('se o checkbox está como not check', function() {
      $rootScope.todoListElements = [{
        isChecked: false,
        description: 'teste'
      }];

      var element = $compile('<todo-list-item list="todoListElements"></todo-list-item>')($rootScope);
      $rootScope.$digest();
      expect($(element).find('.check').length).toEqual(0);
      expect($(element).find('li').length).toEqual(1);
    });

    it('se existe mais que um elemento no array', function() {
      $rootScope.todoListElements = [{
        isChecked: false,
        description: 'teste'
      }, {
        isChecked: false,
        description: 'teste2'
      }];

      var element = $compile('<todo-list-item list="todoListElements"></todo-list-item>')($rootScope);
      $rootScope.$digest();
      expect($(element).find('li').length).toEqual(2);
    });
  });

  describe('metodos de click', function() {
    it('click em editar linha', function(){
      $rootScope.todoListElements = [{
        isChecked: false,
        description: 'teste'
      }];
      $rootScope.arrayEdit = [true];

      var element = $compile('<todo-list-item list="todoListElements"></todo-list-item>')($rootScope);
      $rootScope.$digest();
      $(element).find('.onEdit').click();
      expect($rootScope.arrayEdit[0]).toEqual(true);
    });
  });

});
