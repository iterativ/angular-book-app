(function() {
  'use strict';

  angular.module('itApp.books').directive('itBook', function() {
    return {
      restrict: 'E',
      scope: {
        book: '=',
        collapsed: '='
      },
      templateUrl: '/scripts/books/book.html',
      controller: function($scope) {
        $scope.clickHeader = function() {
          $scope.collapsed = !$scope.collapsed;
        }
      }
    }
  })
}());
