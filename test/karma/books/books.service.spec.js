'use strict';

describe('books.service', function () {

  var bookService;
  var mockHttpBackend;

  beforeEach(module('itApp'));

  beforeEach(inject(function(_bookService_, $httpBackend) {
    bookService = _bookService_;
    mockHttpBackend = $httpBackend;
  }));

  it('calls the google books API with the correct URL', function () {
    var result = null;

    bookService.getBookDetailsByIsbn('0596517742').then(function(bookData) {
      result = bookData;
    });

    mockHttpBackend.expectGET('https://www.googleapis.com/books/v1/volumes?q=isbn:0596517742').respond({});

    mockHttpBackend.flush();
  });
});
