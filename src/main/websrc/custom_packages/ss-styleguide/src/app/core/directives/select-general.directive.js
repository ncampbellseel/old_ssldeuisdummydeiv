/*jshint latedef:false*/

//Directive - msSelectGeneral

(function() {
    'use strict';

    angular
        .module('xyzApp')
        .directive('msSelectGeneral', msSelectGeneral);

    msSelectGeneral.$inject = [];

    function msSelectGeneral() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/dropdown.template.html',
            scope: {
                model: '=',
                hint: '@',
                label: '@',
                name: '=',
                options: '=',
                selected: '=?',
                alt: '@',
                pre: '@',
                main: '=',
                sub: '=',
                large: '=',
                required: '='
            },
            controller: function($scope, $http, $filter, $timeout) {

                $scope.boxClass = $scope.main;
                $scope.boxSubClass = $scope.sub;
                $scope.boxLargeClass = $scope.large;
                $scope.isRequired = $scope.required;

                $scope.label = $filter('translate')($scope.label);
                $scope.hint = $filter('translate')($scope.hint);

                var pre = '';
                if ($scope.pre) {
                    pre = $scope.pre + ' ';
                }

                if ($scope.alt) {

                    if ($scope.alt === 'name') {

                        $scope.configOptions = {
                            maxItems: 1,
                            valueField: 'name',
                            labelField: 'name',
                            searchField: ['name'],
                            placeholder: $scope.hint,
                            selectOnTab: true,
                            sortField: 'name',
                            duplicate: true,
                            render: {
                                option: function(item, escape) {
                                    var label = pre + item.name;
                                    return '<div class="dd-item">' +
                                        '<span class="label">' + escape(label) + '</span>' +
                                        '</div>';
                                }
                            },
                            onInitialize: function(selectize) {
                                $scope.selectName = selectize;

                                if ($scope.model && _.isNil($scope.selected)) {
                                    $scope.selected = $scope.model;
                                }

                                if ($scope.selected) {
                                    var new_option = [$scope.selected];

                                    $scope.selectName.addOption(new_option);
                                    $scope.selectName.setValue(new_option);

                                    $scope.model = $scope.selected;
                                    $scope.name = $scope.selected.name;
                                }


                            },
                            onChange: function(value) {

                                if (value) {

                                    var match = _.find($scope.modelOptions, _.matchesProperty('name', value));

                                    if (match) {
                                        $scope.selectName.loadedSearches = {};
                                        $scope.model = match;
                                        $scope.name = match.name;
                                        $scope.$apply();
                                    }

                                } else {
                                    $scope.model = undefined;
                                    $scope.name = undefined;
                                    $scope.$apply();
                                }
                            }
                        };
                    }

                } else {

                    $scope.configOptions = {
                        maxItems: 1,
                        valueField: 'value',
                        labelField: 'value',
                        searchField: ['value'],
                        placeholder: $scope.hint,
                        selectOnTab: true,
                        sortField: 'value',
                        duplicate: true,
                        render: {
                            option: function(item, escape) {
                                var label = pre + item.value;
                                return '<div class="dd-item">' +
                                    '<span class="label">' + escape(label) + '</span>' +
                                    '</div>';
                            }
                        },
                        onInitialize: function(selectize) {
                            $scope.selectName = selectize;

                            if ($scope.model && _.isNil($scope.selected)) {
                                $scope.selected = $scope.model;
                            }

                            if ($scope.selected) {
                                var new_option = [$scope.selected];

                                $scope.selectName.addOption(new_option);
                                $scope.selectName.setValue(new_option);

                                $scope.model = $scope.selected;
                                $scope.name = $scope.selected.value;
                            }

                        },
                        onChange: function(value) {

                            if (value) {

                                var match = _.find($scope.modelOptions, _.matchesProperty('value', value));

                                if (match) {
                                    $scope.selectName.loadedSearches = {};
                                    $scope.model = match;
                                    $scope.name = match.value;
                                    $timeout(function() {
                                        $scope.$apply();
                                    });
                                }

                            } else {
                                $scope.model = undefined;
                                $scope.name = undefined;
                                $timeout(function() {
                                    $scope.$apply();
                                });
                            }
                        }
                    };
                }

                $scope.$watch('options', function() {
                    $scope.modelOptions = $scope.options;
                }, true);

            }
        };

    }

})();
