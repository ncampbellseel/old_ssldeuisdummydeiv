/*jshint latedef:false*/

//Directive - ssTimePicker

(function () {
    'use strict';

    angular
        .module('ssTimePicker', [
            'app.service.global'
        ])
        .directive('ssTimePicker', ssTimePicker);

    ssTimePicker.$inject = ['$compile', 'GlobalFactory'];

    function ssTimePicker($compile) {

        return {
            restrict: 'E',
            templateUrl: 'components/time-picker/time-picker.template.html',
            scope: {
                time: '=model',
                date: '=',
                dep: '=?',
                max: '=?',
                required: '=?',
                selected: '=?',
                flip: '=?',
                disable: '=?'
            },
            link: function (scope, element) {
                $compile(element.contents())(scope.$new());
            },
            controller: function ($scope, GlobalFactory) {

                $scope.requiredTime = true;

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
                        if ($scope.time && $scope.time.length === 2) {
                            $scope.time = $scope.time + ':';
                        }
                    } else {
                        var temp = $scope.time;
                        if ($scope.time && $scope.time.length === 2) {
                            $scope.time = temp.substring(0, 1);
                        }
                    }
                };

                $scope.checkValidTime = function (date, time, dep) {

                    if ($scope.flip && dep) {
                        dep = GlobalFactory.flipDate(dep);
                    }

                    return GlobalFactory.dateValid(date, time, true, dep, $scope.max);
                };
                
                $scope.formatTime = function (time) {
                    if (time && time.length && time.indexOf(':') === -1) {

                        if (time.length >= 4) {
                            time = time.substring(0, 2) + ':' + time.substring(2, 4);
                        }
                        $scope.time = time;
                    }
                };

                $scope.timeChange = function (item) {
                    $scope.time = (item ? item : undefined);
                };

                $scope.$watch('time', function (newVal) {
                    if (newVal) {
                        if ($scope.selected) {
                            $scope.timeChange(newVal);
                        }
                    }
                });
            }
        };
    }

})();
