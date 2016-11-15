/*jshint latedef:false*/

//Config - imagesConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(imagesConfig);

    imagesConfig.$inject = ['$routeProvider'];

    function imagesConfig($routeProvider) {

        $routeProvider

            .when('/images', {
                templateUrl: 'elements/images/images.template.html'
            });
    }

})();