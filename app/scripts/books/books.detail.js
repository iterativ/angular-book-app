'use strict';

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, book, $raven) {
  var vm = this;
  vm.book = book;
  vm.buy = buy;

  activate();

  function activate() {
    $log.debug('BookDetailController activated');
    $raven.captureMessage('BookDetailController activated');
  }

  function buy() {
    $log.debug('Download this Book');
    $amazon.download('asdasd');
  }
}
