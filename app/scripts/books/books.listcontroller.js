'use strict';

angular.module('itApp.books').controller('BookListController', BookListController);

function BookListController($log, bookService) {
  var vm = this;
  vm.books = [];

  activate();

  function activate() {
    $log.debug('BookListController activated');

    bookService.getBooks().then(function(books) {
      vm.books = books;
    });
  }
}
