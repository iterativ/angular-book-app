'use strict';

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($scope, $log, book, $raven, es, ENV) {
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
        es.search({
            index: ENV.bookNotesIndex,
            type: ENV.notesType,
            body: {
                query: {
                    match: {
                        bookId: vm.book.id
                    }
                },
                size: 20
            }
        }).then(function (resp) {
            var hits = resp.hits.hits;
            //vm.notes = _.pluck(hits, '_source');
            vm.notes = hits;
            console.log(vm.notes);
            $scope.$apply();
        }, function (err) {
            console.trace(err.message);
        });
    }

    function searchNotes(searchText) {
        es.search({
            index: ENV.bookNotesIndex,
            type: ENV.notesType,
            body: {
               query: {
                  bool: {
                     should: [
                        {
                           fuzzy: {
                              title: searchText
                           }
                        },
                        {
                           fuzzy: {
                              note: searchText
                           }
                        }
                     ]
                  }
               }
            }
        }).then(function (resp) {
            var hits = resp.hits.hits;
            //vm.notes = _.pluck(hits, '_source');
            vm.notes = hits;
            console.log(vm.notes);
            $scope.$apply();
        }, function (err) {
            console.trace(err.message);
        });
    }

    function saveNote(newNoteTitle, newNoteText) {
        es.index({
            index: ENV.bookNotesIndex,
            type: ENV.notesType,
            body: {
                bookId: vm.book.id,
                title: newNoteTitle,
                note: newNoteText
            }
        }).then(
            function (resp) {
                console.log("Elasticsearch response to indexing " + newNoteTitle + "...");
                console.log(resp);

                vm.newNoteTitle = null;
                vm.newNoteText = null;

                vm.listNotes();
            },
            function (err) {
                console.log("[ERROR] An error occurred whilst indexing: " + newNoteTitle + "...");
                console.log(err.message);

                vm.listNotes();
            });
    }

    function deleteNote(noteId) {
        es.delete({
            index: ENV.bookNotesIndex,
            type: ENV.notesType,
            id: noteId
        }).then(
            function (resp) {
                console.log("Elasticsearch response to deleting " + noteId + "...");
                console.log(resp);

                vm.listNotes();
            },
            function (err) {
                console.log("[ERROR] An error occurred whilst deleting: " + noteId + "...");
                console.log(err.message);

                vm.listNotes();
            });
    }




}
