/*jshint latedef:false*/

//Config - typographyConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(typographyConfig);

    typographyConfig.$inject = ['$routeProvider'];

    function typographyConfig($routeProvider) {

        $routeProvider

            .when('/typography', {
                templateUrl: 'type/typography/typography.template.html'
            });
    }

})();