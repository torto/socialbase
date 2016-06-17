describe('ConfirmDialogDirective', function() {
  var $compile,
    $rootScope;

    var onSuccess = jasmine.createSpy();
    var onCancel = jasmine.createSpy();

  beforeEach(module('socialbase'));
  beforeEach(module('js/directives/dialogs/confirm/ConfirmDialogView.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('Checando scopes', function() {

    it('estaticos de texto', function() {
      $rootScope.show = true;
      $rootScope.removeItem = onSuccess;
      $rootScope.cancelItem = onCancel;

      var element = $compile('<confirm-dialog message="\'Deseja realmente excluir essa tarefa?\'"' +
        'label-ok="\'Excluir\'"' +
        'label-cancel="\'Cancelar\'"' +
        'on-success="removeItem(elem, index)"' +
        'on-cancel="cancelItem(elem, index)"' +
        'index="1"' +
        'model="{title: \'teste\'}"' +
        'show="show"></confirm-dialog>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Deseja realmente excluir essa tarefa");
      expect(element.html()).toContain("Excluir");
      expect(element.html()).toContain("Cancelar");
    });

    it('do metodo onOK', function(){
      $rootScope.show = true;
      $rootScope.removeItem = onSuccess;
      $rootScope.cancelItem = onCancel;

      var element = $compile('<confirm-dialog message="\'Deseja realmente excluir essa tarefa?\'"' +
        'label-ok="\'Excluir\'"' +
        'label-cancel="\'Cancelar\'"' +
        'on-success="removeItem(elem, index)"' +
        'on-cancel="cancelItem(elem, index)"' +
        'index="1"' +
        'model="{title: \'teste\'}"' +
        'show="show"></confirm-dialog>')($rootScope);
      $rootScope.$digest();

      var ok = $(element).find('[name=\'onOk\']').click();
      expect(onSuccess).toHaveBeenCalled();

    });
    it('do metodo onCancal', function(){
      $rootScope.show = true;
      $rootScope.removeItem = onSuccess;
      $rootScope.cancelItem = onCancel;

      var element = $compile('<confirm-dialog message="\'Deseja realmente excluir essa tarefa?\'"' +
        'label-ok="\'Excluir\'"' +
        'label-cancel="\'Cancelar\'"' +
        'on-success="removeItem(elem, index)"' +
        'on-cancel="cancelItem(elem, index)"' +
        'index="1"' +
        'model="{title: \'teste\'}"' +
        'show="show"></confirm-dialog>')($rootScope);
      $rootScope.$digest();

      var ok = $(element).find('[name=\'onCancel\']').click();
      expect(onCancel).toHaveBeenCalled();

    });

    it('do show quando é false', function(){
      $rootScope.show = true;
      $rootScope.removeItem = onSuccess;
      $rootScope.cancelItem = onCancel;

      var element = $compile('<confirm-dialog message="\'Deseja realmente excluir essa tarefa?\'"' +
        'label-ok="\'Excluir\'"' +
        'label-cancel="\'Cancelar\'"' +
        'on-success="removeItem(elem, index)"' +
        'on-cancel="cancelItem(elem, index)"' +
        'index="1"' +
        'model="{title: \'teste\'}"' +
        'show="show"></confirm-dialog>')($rootScope);
      $rootScope.$digest();
      $rootScope.show = false;
      $rootScope.$digest();
      var length = element[0].childNodes.length;
      expect(length).toEqual(2);

    });
  });

});
