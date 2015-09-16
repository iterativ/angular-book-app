'use strict';

describe('books.detailController', function () {

  var bookController;
  var bookNoteService;
  var $q;

  // load the controller's module
  beforeEach(module('itApp'));

  beforeEach(inject(function($controller, $rootScope, _$q_, _bookNoteService_) {
    $q = _$q_;
    bookNoteService = _bookNoteService_;
    bookController = $controller('BookDetailController', {
      $scope: $rootScope.$new(),
      book: {
        id: 123
      },
      bookNoteService: bookNoteService
    });
  }));

  it('call of saveNote() will call bookNoteService.saveNote() with the correct parameters', function () {
    spyOn(bookNoteService, 'saveNote').and.returnValue($q.when({}));

    bookController.saveNote('title', 'text', 'author');

    expect(bookNoteService.saveNote).toHaveBeenCalled();
  });

});
