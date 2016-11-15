/*jshint latedef:false*/

//Directive - ssLoader

(function () {
    'use strict';

    angular
        .module('ssLoader', [])
        .directive('ssLoader', ssLoader);

    ssLoader.$inject = ['$compile'];

    function ssLoader($compile) {

        return {
            restrict: 'E',
            templateUrl: 'components/loader/loader.template.html',
            link: function (scope, element) {
                $compile(element.contents())(scope.$new());
            }
        };
    }

})();
