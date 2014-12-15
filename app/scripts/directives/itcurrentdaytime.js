'use strict';

angular.module('itApp').directive('itCurrentDaytime', itCurrentDaytime);

function itCurrentDaytime() {
  return {
    scope: {},
    restrict: 'E',
    template: '<span>{{date|date:"dd.MM.yyyy HH:mm:ss"}}</span>',
    link: function(scope) {
      scope.date = new Date();
    }
  };
}
