/*jshint latedef:false*/

//Directive - loading

(function () {
    'use strict';

    angular
        .module('xyzApp')
        .directive('loading', loading);

    loading.$inject = [];

    function loading() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/loading.template.html'
        };

    }

})();
