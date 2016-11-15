/*jshint latedef:false*/

//Config - spacingConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(spacingConfig);

    spacingConfig.$inject = ['$routeProvider'];

    function spacingConfig($routeProvider) {

        $routeProvider

            .when('/spacing', {
                templateUrl: 'layout/spacing/spacing.template.html',
                controller: 'SpacingCtrl'
            });
    }

})();