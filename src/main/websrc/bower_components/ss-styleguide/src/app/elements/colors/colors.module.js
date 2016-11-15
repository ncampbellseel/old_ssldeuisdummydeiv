/*jshint latedef:false*/

//Config - colorsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(colorsConfig);

    colorsConfig.$inject = ['$routeProvider'];

    function colorsConfig($routeProvider) {

        $routeProvider

            .when('/colors', {
                templateUrl: 'elements/colors/colors.template.html'
            });
    }

})();