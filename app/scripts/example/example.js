'use strict';

angular.module('itApp.example').controller('ExampleController', ExampleController);

ExampleController.$inject = ['$log'];

function ExampleController($log) {
  var vm = this;

  vm.mouseOver = function() {
    $log.debug('mouseOver in ExampleController');
  };
  vm.title = 'Hover me!';

  activate();

  function activate() {
    $log.debug('ExampleController activated');
  }
}
