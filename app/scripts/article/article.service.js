'use strict';

angular.module('itApp.article').factory('articleService', articleService);

articleService.$inject = ['$q', '$http'];

function articleService($q, $http) {
  var cachedData = null;

  return {
    getArticles: getArticles,
    getArticleById: getArticleById
  };

  function getArticles() {
    if(cachedData) {
      return $q.when(cachedData);
    }
    else {
      return $http.get('/scripts/article/articledata.json').then(function(response) {
        // store the data in the cache variable
        cachedData = response.data;
        return cachedData;
      });
    }
  }

  function getArticleById(id) {
    return getArticles().then(function(articles) {
      return _.find(articles, {id: id});
    });
  }
}
