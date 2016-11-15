/*jshint latedef:false*/

//Directive - jsonText

(function () {
    'use strict';

    angular
        .module('whitelabelApp')
        .directive('jsonText', jsonText);

    jsonText.$inject = [];

    function jsonText() {

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                function into(input) {
                    return JSON.parse(input);
                }

                function out(data) {
                    return JSON.stringify(data);
                }
                ngModel.$parsers.push(into);
                ngModel.$formatters.push(out);

            }
        };

    }

})();