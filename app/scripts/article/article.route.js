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
});
