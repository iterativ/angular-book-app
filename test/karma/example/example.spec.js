'use strict';

describe('ExampleController', function () {

  var exampleController;

  // load the controller's module
  beforeEach(module('itApp.example'));

  beforeEach(inject(function($controller) {
    exampleController = $controller('ExampleController');
  }));

  it('has initialized vm.testData in controller createion', function () {
    expect(exampleController.testData).toEqual(['a', 'b', 'c']);
  });

});
