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

  $stateProvider.state('bookDetail', {
    url: '/books/:id',
    templateUrl: '/scripts/books/books.detail.html',
    controller: 'BookDetailController',
    controllerAs: 'vm',
    resolve: {
      book: function($stateParams, bookService) {
        var bookId = parseInt($stateParams.id, 10);
        return bookService.getBookDetailsById(bookId);
      }
    }
  });
});
