/*jshint latedef:false*/

//Directive - errorMessages

(function () {
    'use strict';

    angular
        .module('xyzApp')
        .directive('errorMessages', errorMessages);

    errorMessages.$inject = [];

    function errorMessages() {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'core/elements/errors.template.html'
        };

    }

})();
