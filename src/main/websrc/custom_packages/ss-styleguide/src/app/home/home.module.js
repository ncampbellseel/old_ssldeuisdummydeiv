/*jshint latedef:false*/

//Config - homeConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(homeConfig);

    homeConfig.$inject = ['$routeProvider'];

    function homeConfig($routeProvider) {

        $routeProvider

            //Dashboard

            .when('/home', {
                templateUrl: 'home/home.template.html',
                controller: 'HomeCtrl'
            });
    }

})();