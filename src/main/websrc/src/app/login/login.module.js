/*jshint latedef:false*/

//Config - loginConfig

(function() {

    'use strict';

    angular
        .module('whitelabelApp')
        .config(loginConfig);

    loginConfig.$inject = ['$routeProvider'];

    function loginConfig($routeProvider) {

        $routeProvider

        //Dashboard

            .when('/login', {
            templateUrl: 'login/login.template.html',
            hideMenu: true,
            controller: 'LoginCtrl'
        });
    }

})();
