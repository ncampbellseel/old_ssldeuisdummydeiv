/*jshint latedef:false*/

//Directive - ssPrism

(function() {
    'use strict';

    angular
        .module('xyzApp')
        .directive('ssPrism', ssPrism);

    ssPrism.$inject = [];

    function ssPrism() {

        return {
            scope: {
                type: '=type',
                add: '@add'
            },
            restrict: 'A',
            replace: false,
            link: function(scope, element) {
                element.children().first().addClass(scope.add);
                if (scope.type) {
                    element.html(element[0].innerHTML.replace(/</g, '&lt;'));
                    /*jshint ignore:start*/
                    Prism.highlightElement(element[0]);
                    /*jshint ignore:end*/
                }
            }
        };

    }

})();
