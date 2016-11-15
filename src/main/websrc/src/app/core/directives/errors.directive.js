/*jshint latedef:false*/

//Directive - ssErrorMessages

(function () {
    'use strict';

    angular
        .module('whitelabelApp')
        .directive('ssErrorMessages', ssErrorMessages);

    ssErrorMessages.$inject = [];

    function ssErrorMessages() {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'core/elements/errors.template.html'
        };

    }

})();
