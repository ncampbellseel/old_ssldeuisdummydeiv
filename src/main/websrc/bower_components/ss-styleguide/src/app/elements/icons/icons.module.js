/*jshint latedef:false*/

//Config - iconsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(iconsConfig);

    iconsConfig.$inject = ['$routeProvider'];

    function iconsConfig($routeProvider) {

        $routeProvider

            .when('/icons', {
                templateUrl: 'elements/icons/icons.template.html'
            });
    }

})();