'use strict';

angular.module('itApp').factory('articleService', articleService);

articleService.$inject = ['$q'];

function articleService($q) {
  var articles = [
    'JavaScript The Good Parts',
    'The Pragmatic Programmer',
    'Java in a Nutshell'
  ];

  return {
    // only what is returned is accessible from the outside
    getArticles: function() {
      // return a promise wrapped with the $q.when call
      return $q.when(articles);
    }
  };
}
