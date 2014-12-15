'use strict';

angular.module('itApp.article').controller('ArticleDetailController', ArticleDetailController);

ArticleDetailController.$inject = ['article'];

function ArticleDetailController(article) {
  var vm = this;

  vm.article = article;

  activate();

  function activate() {
  }
}
