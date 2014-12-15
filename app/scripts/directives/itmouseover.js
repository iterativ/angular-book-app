'use strict';

angular.module('itApp').directive('itMouseover', itMouseover);

function itMouseover() {
  return {
    scope: {
      fn: '&itMouseover'
    },
    link: function (scope, element, attrs) {
      $(element).mouseover(function () {
        console.log('mouseover');
        scope.fn();
      });
    },
    restrict: 'A'
  };
}
