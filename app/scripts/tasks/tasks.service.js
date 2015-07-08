(function() {
  'use strict';

  angular.module('itApp.tasks').factory('tasksService', taskService);

  function taskService($q, $http) {
    var cachedTasks = null;

    function getTasks() {
      if(cachedTasks) {
        return $q.when(cachedTasks);
      }
      else {
        return $http.get('/scripts/tasks/tasks.json').then(function(response) {
          cachedTasks = _.map(response.data, function(t) {
            t.cid = _.uniqueId('task_');
            return t;
          });
          return cachedTasks;
        });
      }
    }

    function addTask(task) {
      return getTasks().then(function(tasks) {
        task.cid = _.uniqueId('task_');
        cachedTasks.push(task);
        return cachedTasks;
      });
    }

    function updateTask(task) {
      return getTasks().then(function(tasks) {
        var cachedTask = _.find(tasks, {cid: task.cid});
        angular.merge(cachedTask, task);
        cachedTasks = tasks;
        return cachedTasks;
      });
    }

    function removeTask(task) {
      return getTasks().then(function(tasks) {
        _.remove(tasks, function(t) {
          return t.cid === task.cid;
        });
        cachedTasks = tasks;
        return cachedTasks;
      });
    }

    return {
      getTasks: getTasks,
      updateTask: updateTask,
      removeTask: removeTask,
      addTask: addTask
    }
  }

}());
