/*jshint latedef:false*/

//Directive - ssDynamicName

(function () {
    'use strict';

    angular
        .module('whitelabelApp')
        .directive('ssDynamicName', ssDynamicName);

    ssDynamicName.$inject = [];

    function ssDynamicName($compile) {

        return {
            restrict: 'A',
            terminal: true,
            priority: 1000,
            link: function (scope, element, attrs) {
                element.attr('name', scope.$eval(attrs.ssDynamicName));
                element.removeAttr('ss-dynamic-name');
                $compile(element)(scope);
            }
        };

    }

})();