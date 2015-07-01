'use strict';

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, book, $raven, es, ENV) {
    var vm = this;
    vm.book = book;
    vm.buy = buy;
    vm.search = searchBookNotes;
    vm.notes = null;

    activate();

    function activate() {
        $log.debug('BookDetailController activated');

        // TODO: un-uncomment to see how messages are sent to sentry
        //$raven.captureMessage('BookDetailController activated');
    }

    function buy() {
        //$log.debug('Download this Book');

        // TODO: un-uncomment to see how problems are captured with sentry
        //$amazon.download('asdasd');

        searchBookNotes();
    }

    function searchBookNotes() {
        es.search({
            index: ENV.bookNotesIndex,
            type: ENV.notesType,
            body: {
                query: {
                    match_all: {}
                },
                size: 20
            }
        }).then(function (resp) {
            var hits = resp.hits.hits;
            vm.notes = _.pluck(hits, '_source');
            console.log(vm.notes);
        }, function (err) {
            console.trace(err.message);
        });
    }


}
