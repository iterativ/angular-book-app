'use strict';

angular.module('itApp.article').config(function ($stateProvider) {
  $stateProvider.state('articles', {
    url: '/articles',
    templateUrl: '/scripts/article/article.list.html',
    controller: 'ArticleListController',
    controllerAs: 'vm',
    inMenu: true,
    menuTitle: 'Articles'
  });

  $stateProvider.state('articledetail', {
    url: '/articles/:id',
    templateUrl: '/scripts/article/article.detail.html',
    controller: 'ArticleDetailController',
    controllerAs: 'vm',
    resolve: {
      article: function($stateParams, articleService) {
        var articleId = parseInt($stateParams.id, 10);
        return articleService.getArticleById(articleId);
      }
    }
  });
});
