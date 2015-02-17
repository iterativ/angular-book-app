'use strict';

angular.module('itApp').directive('itValidate', [function() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elm, attr, ctrl) {
      if (!ctrl) {
        return;
      }

      var validationObject = scope.$eval(attr.itValidate);

      addValidators(ctrl, validationObject);

      function addValidators(modelController, validationObject) {
        angular.forEach(validationObject, function(validationFn, key) {
          modelController.$validators[key] = validationFn;
        });
      }

    }
  };
}]);
