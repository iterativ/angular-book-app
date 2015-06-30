'use strict';

angular.module('itApp.example').config(function ($stateProvider) {

  $stateProvider.state('examples', {
    url: '/examples',
    templateUrl: '/scripts/example/example.html',
    controller: 'ExampleController',
    controllerAs: 'vm',
    data: {
      inMenu: true,
      menuTitle: 'Examples'
    }
  });
});
