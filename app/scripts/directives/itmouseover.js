'use strict';

angular.module('itApp').directive('itMouseover', itMouseover);

function itMouseover() {
  return {
    link: function (scope, element, attrs) {
      $(element).mouseover(function () {
        console.log('mouseover');
      });
    },
    restrict: 'A'
  };
}
