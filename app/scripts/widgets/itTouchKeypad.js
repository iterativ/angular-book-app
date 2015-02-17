(function() {
	'use strict';

	angular.module('itApp.widgets').factory('itTouchKeypadService', ['$modal',
		function($modal) {
			return {
				openTouchKeypad: openTouchKeypad
			};

			function openTouchKeypad(initialText, type, title, options) {
				options = angular.extend({
					wholeNumber: false
				}, options);

				return $modal.open({
					templateUrl: '/scripts/widgets/itTouchkeypad.html',
					controller: Controller,
					controllerAs: 'vm',
					resolve: {
						text: function() {
							return initialText;
						},
						type: function() {
							return type;
						},
						title: function() {
							return title;
						},
						options: function() {
							return options;
						}
					}
				}).result;
			}

			function Controller($scope, $modalInstance, text, type, title, options) {
				var vm = this;
				vm.text = (text || '').toString();
				vm.add = add;
				vm.clearChar = clearChar;
				vm.clear = clear;
				vm.ok = ok;
				vm.type = type;
				vm.title = title;
				vm.options = options;
				vm.handleKeypress = handleKeypress;

				function add(char) {
					vm.text += char;
				}

				function clearChar() {
					vm.text = vm.text.substring(0, vm.text.length - 1);
				}

				function clear() {
					vm.text = '';
				}

				function handleKeypress($event) {
					// close on enter
					if($event.keyCode === 13 && vm.text) {
						ok();
					}
				}

				function ok() {
					$modalInstance.close(vm.text);
				}
			}
		}]);

	angular.module('itApp.widgets').directive('itFocusForKeypad', ['$log', function($log) {
		return {
			restrict: 'A',
			scope: {},
			link: function(scope, element, attrs) {
				element.on('focus', function(evt) {
					$log.debug('itKeypadFocus focus');
					var keypadButtonScope = element.siblings().find('button').scope();
					if(keypadButtonScope) {
						keypadButtonScope.$broadcast('keypadInputFocus');
					}
				});
			}
		};
	}]);

	angular.module('itApp.widgets').directive('itHourInputButton', ['itTouchKeypadService',
		function(itTouchKeypadService) {
		return {
			require: 'ngModel',
			restrict: 'E',
			scope: {
				value: '=ngModel',
				field: '=',
				ngDisabled: '&'
			},
			templateUrl: '/scripts/widgets/itKeypadOpenButton.html',
			link: link
		};

		function link(scope, element, attrs) {
			scope.openTouchKeypad = function() {
				scope.field.$setDirty();
				scope.field.$setTouched();
        itTouchKeypadService.openTouchKeypad(scope.value, 'hour').then(function(text) {
					scope.value = text;
				});
			};

			scope.$on('keypadInputFocus', function() {
        /*
				if(appUserDetails.useNumberPanel) {
					scope.openTouchKeypad();
				}
				*/
			});
		}
	}]);

	angular.module('itApp.widgets').directive('itNumberInputButton', ['itTouchKeypadService',
		function(itTouchKeypadService) {
		return {
			require: 'ngModel',
			restrict: 'E',
			scope: {
				value: '=ngModel',
				field: '=?',
				title: '@',
				ngDisabled: '&',
				itWholeNumber: '&'
			},
			templateUrl: '/scripts/widgets/itKeypadOpenButton.html',
			link: link
		};

		function link(scope, element, attrs) {
			scope.openTouchKeypad = function() {
				if(scope.field) {
					scope.field.$setDirty();
					scope.field.$setTouched();
				}
        itTouchKeypadService.openTouchKeypad(scope.value, 'number', scope.title, {
					wholeNumber: scope.itWholeNumber()
				}).then(function(text) {
					scope.value = text;
				});
			};

			scope.$on('keypadInputFocus', function() {
				/*
        if(appUserDetails.useNumberPanel) {
					scope.openTouchKeypad();
				}
				*/
			});
		}
	}]);
}());
