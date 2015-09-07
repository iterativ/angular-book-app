(function() {
  'use strict';

  angular.module('itApp.books').factory('bookService', bookService);

  var googleBooksBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

  function bookService($http) {

    function getBooks() {
      return $http.get('/scripts/books/bookdata.json').then(function(response) {
        return response.data;
      });
    }

    function getBookDetailsByIsbn(isbn) {
      var url = googleBooksBaseUrl + isbn;
      return $http.get(url).then(function(response) {
        if(response.data.totalItems > 0) {
          return response.data.items[0];
        }
        return {};
      });
    }

    function getBookDetailsById(id) {
      return getBooks().then(function(books) {
        var book = _.find(books, {id: id});
        if(book) {
          return getBookDetailsByIsbn(book.isbn);
        }
        return {};
      });
    }

    return {
      getBooks: getBooks,
      getBookDetailsById: getBookDetailsById
    };
  }
}());
