'use strict';

angular.module('itApp').controller('TopMenuController', TopMenuController);

TopMenuController.$inject = ['_', '$state'];

function TopMenuController(_, $state) {
  var vm = this;
  vm.menuStates = filterMenuStates();

  function filterMenuStates() {
    // $state.get returns a list of all states
    return _.filter($state.get(), function (state) {
      return state.data && state.data.inMenu;
    });
  }
}
