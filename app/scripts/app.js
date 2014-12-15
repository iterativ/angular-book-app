'use strict';

var itApp = angular.module('itApp', [
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.tpls'
]);

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

itApp.run(function ($state) {
  //$state.go('default');
});
