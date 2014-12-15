'use strict';

angular.module('itApp.article').controller('ExampleController', ExampleController);

ExampleController.$inject = [];

function ExampleController() {
  var vm = this;

  vm.mouseOver = function() {
    console.log('mouseOver in ExampleController');
  };
  vm.title = 'Hover me!';

  activate();

  function activate() {
  }
}
