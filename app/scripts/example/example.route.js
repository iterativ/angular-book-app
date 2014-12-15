'use strict';

angular.module('itApp.article').config(function ($stateProvider) {

  $stateProvider.state('examples', {
    url: '/examples',
    templateUrl: '/scripts/example/example.html',
    controller: 'ExampleController',
    controllerAs: 'vm',
    inMenu: true,
    menuTitle: 'Examples'
  });
});
