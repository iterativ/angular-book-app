(function() {
  'use strict';

  angular.module('itApp.tasks').factory('tasksService', taskService);

  function taskService($q, $http, es, ENV, $timeout) {
    function getTasks() {
      return es.search({
        index: ENV.tasksIndex,
        type: ENV.tasksType,
        body: {
          query: {
            match_all: {}
          },
          size: 200
        }
      }).then(function (resp) {
        return resp.hits.hits;
      });
    }

    function addTask(task) {
      return es.index({
        index: ENV.tasksIndex,
        type: ENV.tasksType,
        body: task
      }).then(function (resp) {
        return $timeout(function() {
          return getTasks();
        }, 1000);
      }, function (err) {
        return err;
      });
    }

    function updateTask(task) {
      return es.index({
        index: ENV.tasksIndex,
        type: ENV.tasksType,
        id: task._id,
        body: task._source
      }).then(function (resp) {
        return $timeout(function() {
          return getTasks();
        }, 1000);
      }, function (err) {
        return err;
      });
    }

    function removeTask(task) {
      var id = task._id;
      return es.delete({
        index: ENV.tasksIndex,
        type: ENV.tasksType,
        id: id
      }).then(function (resp) {
        return $timeout(function() {
          return getTasks();
        }, 1000);
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
