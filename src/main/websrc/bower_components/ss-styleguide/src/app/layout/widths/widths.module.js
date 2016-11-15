/*jshint latedef:false*/

//Config - widthsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(widthsConfig);

    widthsConfig.$inject = ['$routeProvider'];

    function widthsConfig($routeProvider) {

        $routeProvider

            .when('/widths', {
                templateUrl: 'layout/widths/widths.template.html',
                controller: 'WidthsCtrl'
            });
    }

})();