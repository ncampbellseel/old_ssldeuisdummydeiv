/*jshint latedef:false*/

//Directive - timePicker

(function() {
    'use strict';

    angular
        .module('xyzApp')
        .directive('timePicker', timePicker);

    timePicker.$inject = [];

    function timePicker() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/time-picker.template.html',
            scope: {
                timeModel: '=model',
                steps: '=steps',
                dep: '=dep',
                future: '=future',
                activity: '=activity',
                departure: '=departure',
                landing: '=landing',
                returner: '=return',
                required: '=required',
            },
            controller: function($scope, GlobalFactory) {

                $scope.requiredTime = true;

                if ($scope.required === false) {
                    $scope.requiredTime = false;
                }

                $scope.addDivider = function(e) {
                    if ($scope.time) {
                        if (e.keyCode === 16) {
                            $scope.time = $scope.time.substring(0, $scope.time.length - 1);
                        } else {
                            if (e.keyCode !== 8) {
                                var reg = /[0-9]/;
                                if ($scope.time.length == 2 && reg.test($scope.time)) $scope.time = $scope.time + ':';
                            }
                        }
                    }
                };

                $scope.checkValidTime = function(date, time) {
                    return GlobalFactory.dateValid(date, time, true, $scope.dep, $scope.future);
                };

                $scope.timeChange = function(item) {

                    if (item) {
                        $scope.time = item;
                    } else {
                        $scope.time = undefined;
                    }

                    if ($scope.activity === true) {
                        $scope.date = $scope.timeModel.activityDate;
                        $scope.timeModel.activityTime = $scope.time;
                    }

                    if ($scope.departure === true) {
                        $scope.date = $scope.timeModel.departureDate;
                        $scope.timeModel.departureTime = $scope.time;
                    }

                    if ($scope.landing === true) {
                        $scope.date = $scope.timeModel.landingDate;
                        $scope.timeModel.landingTime = $scope.time;
                    }

                    if ($scope.returner === true) {
                        $scope.date = $scope.timeModel.returnDate;
                        $scope.timeModel.returnTime = $scope.time;
                    }

                };
            }
        };
    }

})();
