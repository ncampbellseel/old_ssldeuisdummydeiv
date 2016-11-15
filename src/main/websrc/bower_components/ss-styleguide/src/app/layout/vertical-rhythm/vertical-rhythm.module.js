/*jshint latedef:false*/

//Config - verticalRhythmConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(verticalRhythmConfig);

    verticalRhythmConfig.$inject = ['$routeProvider'];

    function verticalRhythmConfig($routeProvider) {

        $routeProvider

            .when('/vertical-rhythm', {
                templateUrl: 'layout/vertical-rhythm/vertical-rhythm.template.html',
                controller: 'VerticalRhythmCtrl'
            });
    }

})();