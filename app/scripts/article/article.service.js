'use strict';

angular.module('itApp.article').factory('articleService', articleService);

articleService.$inject = ['$q', '$http'];

function articleService($q, $http) {
  return {
    getArticles: getArticles,
    getArticleById: getArticleById
  };

  function getArticles() {
    return $http.get('/scripts/article/articledata.json').then(function(response) {
      return response.data;
    });
  }

  function getArticleById(id) {
    return getArticles().then(function(articles) {
      return _.find(articles, {id: id});
    });
  }
}
