'use strict';

angular.module('itApp').controller('TopMenuController', TopMenuController);

TopMenuController.$inject = ['_', '$state'];

function TopMenuController(_, $state) {
  var vm = this;
  vm.menuStates = filterMenuStates();

  activate();

  function activate() {
  }

  function filterMenuStates() {
    var menuStates = _.filter($state.get(), function (state) {
      return state.inMenu;
    });
    return menuStates;
  }
}
