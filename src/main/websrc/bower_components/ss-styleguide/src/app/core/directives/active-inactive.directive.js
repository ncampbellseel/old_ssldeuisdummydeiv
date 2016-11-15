/*jshint latedef:false*/

//Directive - msActiveInactive

(function() {
    'use strict';

    angular
        .module('xyzApp')
        .directive('msActiveInactive', msActiveInactive);

    msActiveInactive.$inject = [];

    function msActiveInactive() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/dropdown.template.html',
            scope: {
                model: '=',
                label: '@',
                main: '=',
                sub: '=',
                required: '=',
                selected: '='
            },
            controller: function($scope, $http, $filter, $timeout, ReferenceFactory) {

                $scope.label = $filter('translate')('app.global.active') + ' / ' + $filter('translate')('app.global.inactive');

                $scope.boxClass = $scope.main;
                $scope.boxSubClass = $scope.sub;
                $scope.isRequired = $scope.required;

                if ($scope.select === true) {
                    $scope.hint = $filter('translate')('app.global.search');
                } else {
                    $scope.hint = $filter('translate')('app.global.all');
                }

                $scope.getOptions = function() {

                    ReferenceFactory.activeStates()
                        .success(function(data) {
                            $scope.modelOptions = $filter('orderBy')(data, 'vesselActiveState');

                            for (var z = 0; z < $scope.modelOptions.length; z++) {
                                $scope.modelOptions[z].vesselActiveState = $filter('activeInactive')($scope.modelOptions[z].vesselActiveState);
                                $scope.modelOptions[z].vesselActiveState = $filter('translate')($scope.modelOptions[z].vesselActiveState);
                            }
                        });

                };

                $scope.configOptions = {
                    maxItems: 1,
                    //optgroupField: 'class',
                    valueField: 'vesselActiveState',
                    labelField: 'vesselActiveState',
                    searchField: ['vesselActiveState'],
                    options: $scope.modelOptions,
                    placeholder: $scope.hint,
                    selectOnTab: true,
                    sortField: 'vesselActiveState',
                    duplicate: true,
                    render: {
                        option: function(item, escape) {
                            var label = item.vesselActiveState;
                            return '<div class="dd-item">' +
                                '<span class="label">' + escape(label) + '</span>' +
                                '</div>';
                        }
                    },
                    onChange: function(value) {
                        $scope.completeItem(value);
                    },
                    onInitialize: function(selectize) {

                        $scope.selectName = selectize;

                        $scope.getOptions();

                        if ($scope.selected) {
                            var new_option = [$scope.selected];

                            $scope.selectName.addOption(new_option);
                            $scope.selectName.setValue(new_option);

                            $scope.model = $scope.selected;
                            $scope.name = $scope.selected.vesselActiveState;
                        }
                    }

                };

                $scope.completeItem = function(value) {

                    var match = _.find($scope.modelOptions, _.matchesProperty('vesselActiveState', value));

                    if (match) {
                        $scope.selectName.loadedSearches = {};
                        $scope.model = match;
                        $scope.model.name = value;
                        $scope.$apply();
                    }
                };

            }
        };

    }

})();
