describe('PageDefaultDirective', function() {
  var $compile,
    $rootScope;

  beforeEach(module('socialbase'));
  beforeEach(module('js/directives/pages/PageDefaultView.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('Checando scopes', function() {
    it('estaticos de texto', function() {
      $rootScope.isList = true;
      $rootScope.title = 'Titulo Teste';
      var element = $compile('<page-default title="{{title}}" list="isList"></page-default>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain('Titulo Teste');
      expect(element.html()).toContain('todo-ul');
    });

    it('se list for false', function() {
      $rootScope.isList = false;
      $rootScope.title = 'Titulo Teste';
      var element = $compile('<page-default title="{{title}}" list="isList"></page-default>')($rootScope);
      $rootScope.$digest();
      expect($(element).find('.todo-ul').length).toEqual(0);
    });
  });

});
