'use strict';

describe('myApp.cars module', function() {

  beforeEach(module('myApp.cars'));

  describe('cars controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var carsCtrl = $controller('CarsCtrl');
      expect(carsCtrl).toBeDefined();
    }));

  });
});