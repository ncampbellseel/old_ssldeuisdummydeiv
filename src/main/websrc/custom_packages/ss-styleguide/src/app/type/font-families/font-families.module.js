/*jshint latedef:false*/

//Config - fontFamiliesConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(fontFamiliesConfig);

    fontFamiliesConfig.$inject = ['$routeProvider'];

    function fontFamiliesConfig($routeProvider) {

        $routeProvider

            .when('/font-families', {
                templateUrl: 'type/font-families/font-families.template.html'
            });
    }

})();