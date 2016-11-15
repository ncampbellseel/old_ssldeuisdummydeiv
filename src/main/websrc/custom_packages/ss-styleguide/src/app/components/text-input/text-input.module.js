/*jshint latedef:false*/

//Config - textInputConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(textInputConfig);

    textInputConfig.$inject = ['$routeProvider'];

    function textInputConfig($routeProvider) {

        $routeProvider

            .when('/text-input', {
                templateUrl: 'components/text-input/text-input.template.html'
            });
    }

})();