(function() {
  'use strict';

  angular.module('itApp.tasks').controller('TaskListController', TaskListController);

  function TaskListController(tasksService, dialogService) {
    var vm = this;
    vm.tasks = [];
    vm.taskInput = '';

    activate();

    function activate() {
      console.log('TaskListController activated');

      tasksService.getTasks().then(function(tasks) {
        vm.tasks = tasks;
      });
    }

    vm.addTask = function() {
      if(vm.taskInput) {
        tasksService.addTask({
          name: vm.taskInput,
          done: false
        }).then(function(tasks) {
          vm.tasks = tasks;
        });
        vm.taskInput = '';
      }
    };

    vm.clickTask = function(task, index) {
      if(task._source.done) {
        dialogService.openConfirmDialog({
          bodyText: 'Wollen Sie den Taks wirklich löschen?'
        }).then(function() {
          tasksService.removeTask(task).then(function(tasks) {
            vm.tasks = tasks;
          });
        });
      }
      else {
        task._source.done = true;
        tasksService.updateTask(task).then(function(tasks) {
          vm.tasks = tasks;
        })
      }
    };

  }
}());
