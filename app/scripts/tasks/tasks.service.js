(function() {
  'use strict';

  angular.module('itApp.tasks').factory('tasksService', taskService);

  function taskService($q, $http, es, ENV, $timeout) {
    function getTasks() {
      /*jshint camelcase: false */
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
        return _.map(resp.hits.hits, function(t) {
          return {
            elasticId: t._id,
            name: t._source.name,
            done: t._source.done
          };
        });
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
        id: task.elasticId,
        body: {
          name: task.name,
          done: task.done
        }
      }).then(function (resp) {
        return $timeout(function() {
          return getTasks();
        }, 1000);
      }, function (err) {
        return err;
      });
    }

    function removeTask(task) {
      return es.delete({
        index: ENV.tasksIndex,
        type: ENV.tasksType,
        id: task.elasticId
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
    };
  }

}());
