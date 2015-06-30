'use strict';

angular.module('itApp.books').config(function ($stateProvider) {

  $stateProvider.state('books', {
    url: '/books',
    templateUrl: '/scripts/books/books.list.html',
    controller: 'BookListController',
    controllerAs: 'vm',
    data: {
      inMenu: true,
      menuTitle: 'Books'
    }
  });
});
