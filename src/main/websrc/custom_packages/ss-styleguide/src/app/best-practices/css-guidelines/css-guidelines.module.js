/*jshint latedef:false*/

//Config - bordersConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(cssGuidelinesConfig);

    cssGuidelinesConfig.$inject = ['$routeProvider'];

    function cssGuidelinesConfig($routeProvider) {

        $routeProvider

            .when('/css-guidelines', {
                templateUrl: 'best-practices/css-guidelines/css-guidelines.template.html'
            });
    }

})();