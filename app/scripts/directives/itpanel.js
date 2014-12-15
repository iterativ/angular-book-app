'use strict';

angular.module('itApp').directive('itPanel', itPanel);

function itPanel() {
  return {
    scope: {
      title: '@'
    },
    transclude: true,
    restrict: 'E',
    templateUrl: '/scripts/directives/itpanel.html'
  };
}
