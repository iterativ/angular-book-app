'use strict';

angular.module('itApp.article').controller('ArticleListController', ArticleListController);

ArticleListController.$inject = ['articleService'];

function ArticleListController(articleService) {
  var vm = this;

  vm.articles = [];

  activate();

  function activate() {
    articleService.getArticles().then(function(articleData) {
      vm.articles = articleData;
    });
  }
}
