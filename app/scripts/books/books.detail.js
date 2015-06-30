'use strict';

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, book) {
  var vm = this;
  vm.book = book;

  activate();

  function activate() {
    $log.debug('BookDetailController activated');
  }
}
