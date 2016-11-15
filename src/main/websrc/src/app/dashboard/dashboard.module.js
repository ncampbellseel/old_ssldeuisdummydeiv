/*jshint latedef:false*/

//Config - dashboardConfig

(function() {

    'use strict';

    angular
        .module('whitelabelApp')
        .config(dashboardConfig);

    dashboardConfig.$inject = ['$routeProvider'];

    function dashboardConfig($routeProvider) {

        $routeProvider

            //Dashboard

            .when('/dashboard', {
                requireLogin: true,
                roleTypes: ['admin'],
                templateUrl: 'dashboard/dashboard.template.html',
                controller: 'DashboardCtrl'
            });
    }

})();