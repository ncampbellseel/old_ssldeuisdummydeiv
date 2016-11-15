/*jshint latedef:false*/

//Config - transitionsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(transitionsConfig);

    transitionsConfig.$inject = ['$routeProvider'];

    function transitionsConfig($routeProvider) {

        $routeProvider

            .when('/transitions', {
                templateUrl: 'animations/transitions/transitions.template.html'
            });
    }

})();