'use strict';

describe('books.service', function () {

  var bookService;
  var mockHttpBackend;

  beforeEach(module('itApp'));

  beforeEach(inject(function(_bookService_, $httpBackend) {
    // we need to get access to our service under test via the inject function
    bookService = _bookService_;

    // we can control the $http calls via the $httpBackend testing service
    mockHttpBackend = $httpBackend;
  }));

  it('calls the google books API with the correct URL', function () {
    var result = null;

    bookService.getBookDetailsByIsbn('0596517742').then(function(bookData) {
      result = bookData;
    });

    // when a request is made without stating it explicitly it will fail
    mockHttpBackend.expectGET('https://www.googleapis.com/books/v1/volumes?q=isbn:0596517742').respond({});

    // a call to flush is necessary to kick off the $httpBackend
    mockHttpBackend.flush();
  });
});
