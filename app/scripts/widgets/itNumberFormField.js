(function() {
	'use strict';

	angular.module('itApp.widgets').directive('itNumberFormField', numberFormFieldDirective);

	numberFormFieldDirective.$inject = [];

	function numberFormFieldDirective() {
		return {
			scope: {
				form: '=',
				ngModel: '=',
				label: '@',
				name: '@',
				title: '@',
				ngDisabled: '&',
				ngRequired: '&',
        itValidate: '&'
			},
			controller: Controller,
			controllerAs: 'vm',
      templateUrl: '/scripts/widgets/itNumberFormField.html'
		};
	}

	Controller.$inject = ['$scope'];
	function Controller($scope) {
		var vm = this;

		if(!$scope.name) {
			$scope.name = 'number';
		}

    vm.validate = function() {
      return angular.extend({
        validateNumber: validateNumber
      }, $scope.itValidate());
    };

    function validateNumber(modelValue, viewValue) {
      var pattern = /^(\-)?\d{1,10}(\.\d{1,4})?$/;
      return !viewValue || pattern.test(viewValue);
    }
	}

}());
