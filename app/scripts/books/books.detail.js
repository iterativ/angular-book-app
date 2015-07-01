'use strict';

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, book, $raven) {
    var vm = this;
    vm.book = book;
    vm.buy = buy;

    activate();

    function activate() {
        $log.debug('BookDetailController activated');

        // TODO: un-uncomment to see how messages are sent to sentry
        //$raven.captureMessage('BookDetailController activated');
    }

    function buy() {
        $log.debug('Download this Book');

        // TODO: un-uncomment to see how problems are captured with sentry
        //$amazon.download('asdasd');
    }
}
