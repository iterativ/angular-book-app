'use strict';

var itApp = angular.module('itApp', [
  'ngSanitize',
  'ngMessages',

  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.tpls',

  'itApp.widgets',
  'itApp.books',
  //'itApp.article',
  'itApp.example'
]);

itApp.directive('customInput', function() {
  return {
    scope: {
      numberModel: '=',
      name: '@',
      ngMinlength: '&'
    },
    template: '<input ng-minlength="ngMinlength()" name={{name}} ng-model="numberModel"/>'
  };
});

itApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '/default',
    templateUrl: '/scripts/core/default.html',
    controller: 'DefaultController',
    controllerAs: 'vm'
  });

  $stateProvider.state('about', {
    url: '/about',
    templateUrl: '/scripts/core/about.html',
    controller: 'AboutController',
    controllerAs: 'vm'
  });

  $urlRouterProvider.when('', '/default');
});
