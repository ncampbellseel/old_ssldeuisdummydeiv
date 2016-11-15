/*jshint latedef:false*/

//Config - radiosAndCheckboxesConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(radiosAndCheckboxesConfig);

    radiosAndCheckboxesConfig.$inject = ['$routeProvider'];

    function radiosAndCheckboxesConfig($routeProvider) {

        $routeProvider

            .when('/radios-and-checkboxes', {
                templateUrl: 'components/radios-and-checkboxes/radios-and-checkboxes.template.html'
            });
    }

})();