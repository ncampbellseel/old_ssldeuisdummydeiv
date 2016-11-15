/*jshint latedef:false*/

//Config - formsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(formsConfig);

    formsConfig.$inject = ['$routeProvider'];

    function formsConfig($routeProvider) {

        $routeProvider

            .when('/forms', {
                templateUrl: 'elements/forms/forms.template.html'
            });
    }

})();