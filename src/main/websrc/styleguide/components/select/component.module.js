/*jshint latedef:false*/

//Config - selectConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(selectConfig);

    selectConfig.$inject = ['$routeProvider'];

    function selectConfig($routeProvider) {

        $routeProvider

            .when('/components/select', {
            templateUrl: 'components/select/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssSelect'
                    }]);
                }]
            }
        });

    }

})();

/*jshint latedef:false*/

//Controller - SelectCtrl

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .controller('SelectCtrl', SelectCtrl);

    SelectCtrl.$inject = ['$scope'];

    function SelectCtrl($scope) {

        $scope.exampleOptions1 = [{
            name: 'Option 1',
            value: 'option1'
        }, {
            name: 'Option 2',
            value: 'option2'
        }, {
            name: 'Option 3',
            value: 'option3'
        }];

        $scope.exampleOptions2 = [{
            name: 'Option 1',
            desc: 'Option description',
            value: 'option1'
        }, {
            name: 'Option 2',
            desc: 'Option description',
            value: 'option2'
        }, {
            name: 'Option 3',
            desc: 'Option description',
            value: 'option3'
        }];
    }

})();
