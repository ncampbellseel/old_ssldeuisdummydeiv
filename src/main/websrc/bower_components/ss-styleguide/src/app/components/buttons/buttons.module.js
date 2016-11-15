/*jshint latedef:false*/

//Config - buttonsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(buttonsConfig);

    buttonsConfig.$inject = ['$routeProvider'];

    function buttonsConfig($routeProvider) {

        $routeProvider

            .when('/buttons', {
                templateUrl: 'components/buttons/buttons.template.html'
            });
    }

})();