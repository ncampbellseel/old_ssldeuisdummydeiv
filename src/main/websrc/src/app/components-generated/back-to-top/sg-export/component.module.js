/*jshint latedef:false*/

//Config - backToTopConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(backToTopConfig);

    backToTopConfig.$inject = ['$routeProvider'];

    function backToTopConfig($routeProvider) {

        $routeProvider

            .when('/components/back-to-top', {
            templateUrl: 'components/back-to-top/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssBackToTop'
                    }]);
                }]
            }
        });

    }

})();