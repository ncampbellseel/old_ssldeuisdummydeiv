/*jshint latedef:false*/

//Config - bordersConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(bordersConfig);

    bordersConfig.$inject = ['$routeProvider'];

    function bordersConfig($routeProvider) {

        $routeProvider

            .when('/elements/borders', {
                templateUrl: 'elements/borders/borders.template.html'
            });
    }

})();