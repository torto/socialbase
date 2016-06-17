describe('IndexService', function() {
  // Declarando as variaveis a serem utilizadas nos testes
  var service;

  // Injetando o modulo app nos testes
  beforeEach(module('socialbase'));
  beforeEach(inject(function($injector) {
    service = $injector.get('IndexService');
  }));

  describe('setListStorage', function(){
    it('com valores', function(){
      var array = [1,2,3];
      service.setListStorage(array, function(retorno){
        expect(retorno.length).toEqual(3);
        expect(retorno[0]).toEqual(1);
        service.cleanStorage();
      });
    });

    it('sem valores', function(){
      var array = [];
      service.setListStorage(array, function(retorno){
        expect(retorno.length).toEqual(0);
        service.cleanStorage();
      });
    });
  });

  describe('getList', function(){
    it('init', function(){
      service.cleanStorage();
      expect(service.getList().length).toEqual(0);
    });

    it('com valores', function(){
      var array = [1,2,3];
      service.setListStorage(array, function(retorno){
        expect(service.getList().length).toEqual(3);
        service.cleanStorage();
      });
    });
  });

});
