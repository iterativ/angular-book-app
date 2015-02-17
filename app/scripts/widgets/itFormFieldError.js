(function() {
	'use strict';

	angular.module('itApp.widgets').directive('itFormFieldError', formFieldErrorDirective);

	function formFieldErrorDirective() {
		return {
			scope: {
				field: '='
			},
			templateUrl: '/scripts/widgets/itFormFieldError.html',
			link: function(scope, element, attrs) {
				scope.validationErrorTemplate = '/scripts/widgets/itFormFieldErrors.html'
			}
		};
	}
}());
