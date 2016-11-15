/*jshint latedef:false*/

//Config - gridConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(gridConfig);

    gridConfig.$inject = ['$routeProvider'];

    function gridConfig($routeProvider) {

        $routeProvider

            .when('/grid', {
                templateUrl: 'layout/grid/grid.template.html',
                controller: 'GridCtrl'
            });
    }

})();