/*jshint latedef:false*/

//Config - animationsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(animationsConfig);

    animationsConfig.$inject = ['$routeProvider'];

    function animationsConfig($routeProvider) {

        $routeProvider

            .when('/animations', {
                templateUrl: 'animations/animations/animations.template.html'
            });
    }

})();