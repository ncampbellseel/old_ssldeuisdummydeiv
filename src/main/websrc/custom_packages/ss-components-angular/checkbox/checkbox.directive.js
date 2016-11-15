/*jshint latedef:false*/

//Directive - ssCheckbox

(function () {
    'use strict';

    angular
        .module('ssCheckbox', [])
        .directive('ssCheckbox', ssCheckbox);

    ssCheckbox.$inject = [];

    function ssCheckbox() {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/checkbox/checkbox.template.html',
            scope: {
                model: '=',
                uniq: '@?',
                text: '@',
                type: '@',
                action: '&?',
                actionAfter: '&?',
                main: '=?',
                sub: '=?',
                col: '=?'
            },
            controller: function ($scope, $timeout) {

                $scope.index = Math.random() + Math.random() * (999 - 99) + 99;

                $scope.checked = false;
                $scope.activeClass = '';

                if ($scope.model) {
                    $scope.activeClass = 'active';
                }

                $scope.col = $scope.col ? $scope.col : $scope.sub;
                $scope.large = $scope.main ? $scope.main : '12';

                $scope.toggleIt = function (keydown, e) {

                    if (keydown && e.keyCode !== 13) {
                        return false;
                    }

                    if (typeof $scope.action === 'function') {
                        $scope.action();
                    }

                    if ($scope.type === 'checkbox') {
                        $scope.model = !$scope.model;
                    }

                    if ($scope.type === 'radio') {
                        $scope.model = $scope.uniq;

                    }

                    $timeout(function () {
                        $scope.$apply();

                        if (typeof $scope.actionAfter === 'function') {
                            $scope.actionAfter();
                        }
                    });

                };

                $scope.$watch('model', function (newVal) {
                    if ($scope.type === 'checkbox') {
                        if (newVal === true) {
                            $scope.activeClass = 'active';
                        } else {
                            $scope.activeClass = '';
                        }
                    }

                    if ($scope.type === 'radio') {
                        if (newVal === $scope.uniq) {
                            $scope.activeClass = 'active';
                        } else {
                            $scope.activeClass = '';
                        }
                    }
                    $timeout(function () {
                        $scope.$apply();
                    });
                }, true);
            }
        };
    }

})();
