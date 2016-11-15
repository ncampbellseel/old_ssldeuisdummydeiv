/*jshint latedef:false*/

//Directive - ssDatePicker

(function () {
    'use strict';

    angular
        .module('ssDatePicker', [
            'app.service.global',
            'date-picker'
        ])
        .directive('ssDatePicker', ssDatePicker);

    ssDatePicker.$inject = ['$compile', 'GlobalFactory'];

    function ssDatePicker($compile) {

        return {
            restrict: 'E',
            templateUrl: 'components/date-picker/date-picker.template.html',
            scope: {
                date: '=model',
                min: '=?',
                max: '=?',
                set: '=?',
                label: '@',
                selected: '=?',
                main: '=',
                sub: '=',
                large: '=',
                required: '=',
                dep: '=?',
                check: '=?',
                inc: '=?',
                flip: '=?',
                disable: '=?'
            },
            link: function (scope, element) {
                $compile(element.contents())(scope.$new());
            },
            controller: function ($scope, $location, $filter, $timeout, $moment, GlobalFactory) {

                $scope.boxClass = $scope.main;
                $scope.boxSubClass = $scope.sub;
                $scope.boxLargeClass = $scope.large;
                $scope.isRequired = $scope.required;

                $scope.label = $filter('translate')($scope.label);

                if (!$scope.dep) {
                    $scope.dep = null;
                }

                $scope.checkInput = function (e) {

                    var prevent = (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 106 && e.keyCode <= 222);

                    if (prevent || e.shiftKey && e.keyCode !== 9 || e.shiftKey && prevent) {
                        e.preventDefault();
                    }
                    $scope.addDivider(e);
                };

                $scope.addDivider = function (e) {

                    if (e.keyCode !== 8) {
                        if ($scope.date && $scope.date.length === 2 || $scope.date && $scope.date.length === 5) {
                            $scope.date = $scope.date + '/';
                        }
                    } else {
                        var temp = $scope.date;
                        if ($scope.date && $scope.date.length === 6) {
                            $scope.date = temp.substring(0, 4);
                        } else if ($scope.date && $scope.date.length === 3) {
                            $scope.date = temp.substring(0, 1);
                        }
                    }
                };

                $scope.checkValidDate = function (date, dep, rtp, allowFuture) {

                    if (!_.isNil(date)) {
                        if ($scope.flip) {
                            dep = GlobalFactory.flipDate(dep);
                        }
                        return GlobalFactory.dateValid(date, false, false, dep, rtp, allowFuture);
                    }
                };
                
                $scope.formatDate = function (date) {
                    if (date && date.length && date.indexOf('/') === -1) {

                        var re = new RegExp(/(\d{6})(\d{2})?/);

                        if (re.test(date)) {
                            if (date.length >= 8) {
                                date = date.substring(0, 2) + '/' + date.substring(2, 4) + '/' + date.substring(4, 8);
                            }
                        }
                        $scope.date = date;
                    }
                };

                $scope.completeDate = function () {
                    $scope.date = $moment($scope.dummyDate).format('DD/MM/YYYY');
                };

                $scope.$watch('set', function (newVal) {
                    if (newVal) {
                        $scope.date = $scope.set;
                    }
                }, true);

            }
        };
    }

})();
