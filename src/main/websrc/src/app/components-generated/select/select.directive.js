/*jshint latedef:false*/

//Directive - ssSelect

(function () {
    'use strict';

    angular
        .module('ssSelect', [])
        .directive('ssSelect', ssSelect);

    ssSelect.$inject = [];

    function ssSelect() {

        return {
            restrict: 'E',
            templateUrl: 'components/select/select.template.html',
            scope: {
                model: '=',
                hint: '@',
                label: '@',
                name: '=',
                options: '=',
                selected: '=?',
                primary: '@',
                secondary: '@',
                reverse: '=?',
                pre: '@',
                main: '=',
                sub: '=',
                large: '=',
                required: '=',
                focus: '=?',
                cancelTab: '=?',
                all: '=?',
                action: '&?'
            },
            controller: function ($scope, $http, $filter, $timeout) {

                $scope.autoSelect = true;
                if ($scope.cancelTab) {
                    $scope.autoSelect = false;
                }

                $scope.boxClass = $scope.main;
                $scope.boxSubClass = $scope.sub;
                $scope.boxLargeClass = $scope.large;
                $scope.isRequired = $scope.required;

                $scope.label = $filter('translate')($scope.label);
                $scope.hint = $filter('translate')($scope.hint);

                if ($scope.focus) {
                    $scope.isFocused = 'select';
                } else {
                    $scope.isFocused = false;
                }

                var pre = '';
                if ($scope.pre) {
                    pre = $scope.pre + ' ';
                }

                var searchList = [];

                searchList.push($scope.primary);

                if ($scope.secondary) {
                    searchList.push($scope.secondary);
                }
                
                if ($scope.reverse) {
                    _.reverse(searchList);
                }

                $scope.configOptions = {
                    maxItems: 1,
                    valueField: $scope.primary,
                    labelField: $scope.primary,
                    searchField: searchList,
                    placeholder: $scope.hint,
                    selectOnTab: $scope.autoSelect,
                    sortField: $scope.primary,
                    duplicate: true,
                    render: {
                        option: function (item, escape) {
                            var label = pre + item[$scope.primary];
                            return '<div class="dd-item">' +
                                '<span class="label">' + escape(label) + '</span>' +
                                ($scope.secondary ? '<span class="caption">' + escape(item[$scope.secondary]) + '</span>' : '') +
                                '</div>';
                        }
                    },
                    onInitialize: function (selectize) {
                        $scope.selectName = selectize;

                        if (_.isObject($scope.selected)) {
                            $scope.model = $scope.selected;
                        }

                        if ($scope.selected && $scope.model) {

                            var new_option = [$scope.model];

                            $scope.selectName.addOption(new_option);
                            $scope.selectName.setValue(new_option);

                            $scope.name = $scope.model[$scope.primary];
                        }

                    },
                    onFocus: function () {
                        return $scope.typeClear($scope.selectName);
                    },
                    onBlur: function () {
                        if (!$scope.name || $scope.name === $filter('translate')('app.global.all')) {
                            $scope.model = undefined;
                            $scope.name = undefined;
                            if ($scope.all) {
                                $scope.name = $filter('translate')('app.global.all');
                            }
                            $timeout(function () {
                                $scope.$apply();
                            });
                        }
                    },
                    onChange: function (value) {

                        if (value) {

                            var match = _.find($scope.modelOptions, _.matchesProperty($scope.primary, value));

                            if (match) {
                                $scope.selectName.loadedSearches = {};
                                if (match[$scope.primary] !== $filter('translate')('app.global.all')) {
                                    $scope.model = match;
                                }

                                if (typeof $scope.action === 'function') {
                                    $scope.action();
                                }
                                $scope.name = match[$scope.primary];

                                $timeout(function () {
                                    $scope.$apply();
                                });
                            } else {
                                $scope.model = undefined;
                            }
                        }
                    }
                };

                // Type to clear input - Function

                $scope.typeClear = function (obj) {
                    var inp = $(obj.$control_input);

                    inp.keydown(function (e) {

                        inp.get(0).allowDefault = true;

                        var printable = (e.keyCode >= 106 && e.keyCode <= 122) || // a-z
                            (e.keyCode >= 65 && e.keyCode <= 90) || // A-Z
                            (e.keyCode >= 96 && e.keyCode <= 105) || // 0-9 Keypad
                            (e.keyCode >= 48 && e.keyCode <= 57); // 0-9

                        if (e.keyCode >= 96 && e.keyCode <= 105) {
                            e.keyCode = e.keyCode - 48;
                        }

                        if (inp.val().length < 1 && printable) {
                            e.preventDefault();
                            obj.clear();
                            obj.loadedSearches = {};
                            inp.val(String.fromCharCode(e.keyCode));
                        }
                    });
                };

                $scope.first = true;

                $scope.$watch('options', function () {
                    if ($scope.options) {

                        $scope.modelOptions = $scope.options;

                        var all = {};

                        if ($scope.all && $scope.first) {

                            $scope.first = false;

                            all[$scope.primary] = $filter('translate')('app.global.all');

                            $scope.modelOptions.push(all);

                            $timeout(function () {
                                $scope.$apply();
                            });

                            if (!$scope.selected) {

                                $scope.selectName.addOption([all]);
                                $scope.selectName.setValue([all]);
                                $scope.name = all[$scope.primary];
                            }
                        }
                    }
                }, true);
                
                $scope.$watch('required', function (newVal) {
                    $scope.isRequired = newVal;
                });

            }
        };

    }

})();
