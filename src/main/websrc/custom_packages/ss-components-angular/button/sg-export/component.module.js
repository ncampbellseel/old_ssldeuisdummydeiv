/*jshint latedef:false*/

//Config - buttonConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(buttonConfig);

    buttonConfig.$inject = ['$routeProvider'];

    function buttonConfig($routeProvider) {

        $routeProvider

            .when('/components/button', {
            templateUrl: 'components/button/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssButton'
                    }]);
                }]
            }
        });

    }

})();
