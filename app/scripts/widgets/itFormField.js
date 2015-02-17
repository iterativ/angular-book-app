(function() {
	'use strict';

	angular.module('itApp.widgets').directive('itFormField', formFieldDirective);

	//moraFormFieldDirective.$inject = ['moraConstants'];

	function formFieldDirective() {
		return {
			scope: {
				form: '=',
				name: '@',
				label: '@'
			},
			transclude: true,
      templateUrl: '/scripts/widgets/itFormField.html'
		};
	}
}());
