'use strict';

angular.module('itApp.books').controller('BookListController', BookListController);

BookListController.$inject = ['$log'];

function BookListController($log) {
  var vm = this;

  activate();

  function activate() {
    $log.debug('BookListController activated');
  }
}
