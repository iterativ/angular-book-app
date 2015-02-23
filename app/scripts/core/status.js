'use strict';

angular.module('itApp').controller('AboutController', AboutController);

AboutController.$inject = [];

function AboutController() {
  var vm = this;

  vm.name = 'Daniel';
}
