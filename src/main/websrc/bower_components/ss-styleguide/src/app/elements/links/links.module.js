/*jshint latedef:false*/

//Config - linksConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(linksConfig);

    linksConfig.$inject = ['$routeProvider'];

    function linksConfig($routeProvider) {

        $routeProvider

            .when('/links', {
                templateUrl: 'elements/links/links.template.html'
            });
    }

})();