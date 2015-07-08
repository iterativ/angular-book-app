(function() {
  'use strict';

  angular.module('itApp.tasks').factory('tasksService', taskService);

  function taskService($q, $http, es, ENV) {

    function getTasks() {
        return es.search({
            index: ENV.tasksIndex,
            type: ENV.tasksType,
            body: {
                query: {
                    match_all: {
                    }
                },
                size: 20
            }
        }).then(function (resp) {
            return _.pluck(resp.hits.hits, '_source');
        }, function (err) {
            return err;
        });
    }

    function addTask(task) {
      return getTasks().then(function(tasks) {


      });
    }

    function updateTask(task) {
      return getTasks().then(function(tasks) {


      });
    }

    function removeTask(task) {
      return getTasks().then(function(tasks) {


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
