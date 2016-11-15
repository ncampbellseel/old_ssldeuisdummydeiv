/*jshint latedef:false*/

//Config - dropdownConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(dropdownConfig);

    dropdownConfig.$inject = ['$routeProvider'];

    function dropdownConfig($routeProvider) {

        $routeProvider

            .when('/dropdown', {
                templateUrl: 'components/dropdown/dropdown.template.html'
            });
    }

})();