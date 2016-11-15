/*jshint latedef:false*/

//Directive - ssButton


(function() {
    'use strict';

    angular
        .module('ssButton', [])
        .directive('ssButton', ssButton);

    ssButton.$inject = ['$compile'];

    function ssButton($compile) {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'components/button/button.template.html',
            scope: {
                text: '@?',
                icon: '@?',
                action: '&',
                type: '@?',
                classes: '@?'
            },
            link: function(scope, element) {
                $compile(element.contents())(scope.$new());
            },
            controller: function($scope) {

                $scope.justIcon = undefined;

                if (!$scope.type) {
                    $scope.type = 'primary';
                }
                if (!$scope.text && $scope.icon) {
                    $scope.justIcon = 'button-icon';
                }

            }
        };
    }

})();
