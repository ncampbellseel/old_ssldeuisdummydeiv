/*jshint latedef:false*/

//Config - responsiveDesignConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(responsiveDesignConfig);

    responsiveDesignConfig.$inject = ['$routeProvider'];

    function responsiveDesignConfig($routeProvider) {

        $routeProvider

            .when('/responsive-design', {
                templateUrl: 'best-practices/responsive-design/responsive-design.template.html'
            });
    }

})();