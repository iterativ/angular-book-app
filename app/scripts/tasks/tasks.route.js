'use strict';

angular.module('itApp.tasks').config(function ($stateProvider) {

  $stateProvider.state('tasks', {
    url: '/tasks',
    templateUrl: '/scripts/tasks/tasks.list.html',
    controller: 'TaskListController',
    controllerAs: 'vm',
    data: {
      inMenu: true,
      menuTitle: 'Tasks'
    }
  });
});
