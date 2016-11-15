/*jshint latedef:false*/

//Directive - ssTab

(function() {
    'use strict';

    angular
        .module('ssTab', [])
        .directive('ssTab', ssTab);

    ssTab.$inject = [];

    function ssTab() {

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'components/tabs/tab.template.html',
            require: '^ssTabset',
            scope: {
                heading: '@'
            },
            link: function(scope, elem, attr, ssTabsetCtrl) {
                scope.current = false;
                ssTabsetCtrl.addTab(scope);
            }
        };
    }

})();
