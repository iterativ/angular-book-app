'use strict';

angular.module('itApp.example').controller('ExampleController', ExampleController);

ExampleController.$inject = ['$log', '$stateParams'];

function ExampleController($log, $stateParams) {
  var vm = this;

  vm.testData = ['a', 'b', 'c'];

  $log.debug($stateParams);

  vm.mouseOver = function() {
    $log.debug('mouseOver in ExampleController');
  };
  vm.title = 'Hover me!';

  activate();

  function activate() {
    $log.debug('ExampleController activated');
  }
}
