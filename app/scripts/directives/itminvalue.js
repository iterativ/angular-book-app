'use strict';

angular.module('itApp').directive('itMinvalue', [function() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elm, attr, ctrl) {
      if (!ctrl) {
        return;
      }

      var minvalue = 0;

      scope.$watch(attr['itMinvalue'], function ngAttrAliasWatchAction(value) {
        attr.$set('minvalue', value);
      });

      attr.$observe('minvalue', function(value) {
        minvalue = parseFloat(value) || 0;
        ctrl.$validate();
      });

      ctrl.$validators.minvalue = function(modelValue, viewValue) {
        return ctrl.$isEmpty(viewValue) || parseFloat(viewValue) >= minvalue;
      };

    }
  };
}]);
