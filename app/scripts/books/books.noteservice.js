/**
 * Iterativ GmbH
 * http://www.iterativ.ch/
 *
 * Copyright (c) 2015 Iterativ GmbH. All rights reserved.
 *
 * Created on 03/07/15
 * @author: pawel.kowalski@iterativ.ch
 */
(function () {
    'use strict';

    angular.module('itApp.books').factory('bookNoteService', bookNoteService);


    function bookNoteService($http, $timeout, es, ENV) {

        function listNotes(bookId) {
            return es.search({
                index: ENV.bookNotesIndex,
                type: ENV.notesType,
                body: {
                    query: {
                        match: {
                            bookId: bookId
                        }
                    },
                    size: 20
                }
            }).then(function (resp) {
                return resp.hits.hits;
            }, function (err) {
                return err;
            });
        }

        function searchNotes(bookId, searchText) {
            return es.search({
                index: ENV.bookNotesIndex,
                type: ENV.notesType,
                body: {
                    query: {
                        filtered: {
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
                            },
                            filter: {
                                query: {
                                    match: {
                                        bookId: bookId
                                    }
                                }
                            }
                        }
                    }
                }
            }).then(function (resp) {
                return resp.hits.hits;
            }, function (err) {
                return err;
            });
        }

        function saveNote(bookId, newNoteTitle, newNoteText, newNoteAuthor) {
            return es.index({
                index: ENV.bookNotesIndex,
                type: ENV.notesType,
                body: {
                    bookId: bookId,
                    title: newNoteTitle,
                    author: newNoteAuthor,
                    note: newNoteText
                }
            }).then(function (resp) {
              return $timeout(function() {
                return resp;
              }, 1000);
            }, function (err) {
                return err;
            });
        }

        function deleteNote(noteId) {
            return es.delete({
                index: ENV.bookNotesIndex,
                type: ENV.notesType,
                id: noteId
            }).then(function (resp) {
                return $timeout(function() {
                  return resp;
                }, 1000);
            }, function (err) {
                return err;
            });
        }

        return {
            listNotes: listNotes,
            searchNotes: searchNotes,
            saveNote: saveNote,
            deleteNote: deleteNote
        };
    }
}());
