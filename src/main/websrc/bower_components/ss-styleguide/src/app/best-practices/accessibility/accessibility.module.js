/*jshint latedef:false*/

//Config - accessibilityConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(accessibilityConfig);

    accessibilityConfig.$inject = ['$routeProvider'];

    function accessibilityConfig($routeProvider) {

        $routeProvider

            .when('/accessibility', {
                templateUrl: 'best-practices/accessibility/accessibility.template.html'
            });
    }

})();