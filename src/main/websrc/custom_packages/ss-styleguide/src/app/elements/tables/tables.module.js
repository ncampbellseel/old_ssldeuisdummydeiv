/*jshint latedef:false*/

//Config - tablesConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(tablesConfig);

    tablesConfig.$inject = ['$routeProvider'];

    function tablesConfig($routeProvider) {

        $routeProvider

            .when('/tables', {
                templateUrl: 'elements/tables/tables.template.html'
            });
    }

})();