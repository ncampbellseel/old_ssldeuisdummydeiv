/*jshint latedef:false*/

//Config - listsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(listsConfig);

    listsConfig.$inject = ['$routeProvider'];

    function listsConfig($routeProvider) {

        $routeProvider

            .when('/lists', {
                templateUrl: 'elements/lists/lists.template.html',
                controller: 'ListsCtrl'
            });
    }

})();