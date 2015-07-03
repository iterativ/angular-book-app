'use strict';

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($scope, $log, $timeout, book, $raven, bookNoteService) {
    var vm = this;

    vm.book = book;
    vm.notes = null;

    vm.buy = buy;
    vm.listNotes = listNotes;
    vm.searchNotes = searchNotes;
    vm.saveNote = saveNote;
    vm.deleteNote = deleteNote;
    vm.download = download;

    activate();

    $scope.$watch('vm.listNotes', function (newValue) {
        console.log('ListNotes called');
        console.log(newValue);
    });

    function activate() {
        $log.debug('BookDetailController activated');

        // TODO: un-uncomment to see how messages are sent to sentry
        //$raven.captureMessage('BookDetailController activated');

        vm.listNotes();
    }

    function buy() {
        //$log.debug('Download this Book');

        // TODO: un-uncomment to see how problems are captured with sentry
        //$amazon.download('asdasd');

        listNotes();
    }

    function download() {
        //$log.debug('Download this Book');

        // TODO: un-uncomment to see how problems are captured with sentry
        //$amazon.download('asdasd');

        listNotes();
    }

    function listNotes() {
        bookNoteService.listNotes(vm.book.id).then(
            function (hits) {
                vm.notes = hits;
            }, function (err) {
                console.trace(err.message);
            });

    }

    function searchNotes(searchText) {
        bookNoteService.searchNotes(vm.book.id, searchText).then(
            function (hits) {
                vm.notes = hits;
            }, function (err) {
                console.trace(err.message);
            });
    }

    function saveNote(newNoteTitle, newNoteText, newNoteAuthor) {
        bookNoteService.saveNote(vm.book.id, newNoteTitle, newNoteText, newNoteAuthor).then(
            function (resp) {
                console.log("Elasticsearch response to indexing " + newNoteTitle + "...");
                console.log(resp);

                vm.newNoteTitle = null;
                vm.newNoteAuthor = null;
                vm.newNoteText = null;

                $timeout(function () {
                    vm.listNotes();
                }, 1000);
            },
            function (err) {
                console.log("[ERROR] An error occurred whilst indexing: " + newNoteTitle + "...");
                console.log(err.message);

                vm.listNotes();
            });
    }

    function deleteNote(noteId) {
        bookNoteService.deleteNote(noteId).then(
            function (resp) {
                console.log("Elasticsearch response to deleting " + noteId + "...");
                console.log(resp);

                $timeout(function () {
                    vm.listNotes();
                }, 1000);
            },
            function (err) {
                console.log("[ERROR] An error occurred whilst deleting: " + noteId + "...");
                console.log(err.message);

                vm.listNotes();
            });
    }

}
