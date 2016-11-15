/*jshint latedef:false*/

//Config - breakpointsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(breakpointsConfig);

    breakpointsConfig.$inject = ['$routeProvider'];

    function breakpointsConfig($routeProvider) {

        $routeProvider

            .when('/breakpoints', {
                templateUrl: 'layout/breakpoints/breakpoints.template.html',
                controller: 'BreakpointsCtrl'
            });
    }

})();