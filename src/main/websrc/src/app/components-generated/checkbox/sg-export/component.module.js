/*jshint latedef:false*/

//Config - checkboxConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(checkboxConfig);

    checkboxConfig.$inject = ['$routeProvider'];

    function checkboxConfig($routeProvider) {

        $routeProvider

            .when('/components/checkbox', {
            templateUrl: 'components/checkbox/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssCheckbox'
                    }]);
                }]
            }
        });

    }

})();
