(function() {
    'use strict';

    angular.module('itApp.dialog').factory('dialogService', dialogService);

    dialogService.$inject = ['$modal'];

    function dialogService($modal) {
        return {
            openConfirmDialog: openConfirmDialog
        };

        function openConfirmDialog(texts, props) {
            texts = texts || {};
            texts = angular.extend({
                title: '',
                okText: 'Ja',
                cancelText: 'Nein',
                bodyText: ''
            }, texts);

            props = props || {};
            props = angular.extend({
                okClass: 'btn-primary',
                cancelClass: 'btn-default'
            }, props);

            return $modal.open({
                templateUrl: '/scripts/dialog/dialogconfirm.html',
                controller: ConfirmController,
                controllerAs: 'vm',
                resolve: {
                    texts: function() {
                        return texts;
                    },
                    props: function() {
                        return props;
                    }
                }
            }).result;
        }

        function ConfirmController($modalInstance, texts, props) {
            var vm = this;
            vm.texts = texts;
            vm.props = props;

            vm.ok = function() {
                $modalInstance.close();
            };

            vm.cancel = function() {
                $modalInstance.dismiss();
            };
        }
    }
}());
