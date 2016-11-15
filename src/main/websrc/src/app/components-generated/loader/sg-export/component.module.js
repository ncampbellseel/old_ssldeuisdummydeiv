/*jshint latedef:false*/

//Config - loaderConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(loaderConfig);

    loaderConfig.$inject = ['$routeProvider'];

    function loaderConfig($routeProvider) {

        $routeProvider

            .when('/components/loader', {
            templateUrl: 'components/loader/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssLoader'
                    }]);
                }]
            }
        });

    }

})();