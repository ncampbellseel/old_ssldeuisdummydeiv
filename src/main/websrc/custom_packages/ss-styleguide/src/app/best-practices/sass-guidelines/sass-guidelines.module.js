/*jshint latedef:false*/

//Config - sassGuidelinesConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(sassGuidelinesConfig);

    sassGuidelinesConfig.$inject = ['$routeProvider'];

    function sassGuidelinesConfig($routeProvider) {

        $routeProvider

            .when('/sass-guidelines', {
                templateUrl: 'best-practices/sass-guidelines/sass-guidelines.template.html'
            });
    }

})();