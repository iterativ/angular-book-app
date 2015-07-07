(function() {
  'use strict';

  angular.module('itApp.tasks').controller('TaskListController', TaskListController);

  function TaskListController(dialogService) {
    var vm = this;
    vm.tasks = [];
    vm.taskInput = '';

    activate();

    function activate() {
      console.log('TaskListController activated');
    }

    vm.addTask = function() {
      if(vm.taskInput) {
        vm.tasks.push({
          name: vm.taskInput,
          done: false
        });
        vm.taskInput = '';
      }
    };

    vm.clickTask = function(task, index) {
      if(task.done) {
        dialogService.openConfirmDialog({
          bodyText: 'Wollen Sie den Taks wirklich löschen?'
        }).then(function() {
          vm.tasks.splice(index, 1);
        });
      }
      else {
        task.done = true;
      }
    };

  }
}());
