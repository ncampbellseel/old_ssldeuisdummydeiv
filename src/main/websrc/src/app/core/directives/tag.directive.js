/*jshint latedef:false*/

//Directive - ssTag

(function() {
    'use strict';

    angular
        .module('whitelabelApp')
        .directive('ssTag', ssTag);

    ssTag.$inject = [];

    function ssTag() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/tag.template.html',
            scope: {
                name: '@',
                tip: '@',
                active: '=',
                juvenile: '=?'
            },
            controller: function($scope, $filter) {
                var addJuv = '';

                if ($scope.juvenile) {
                    addJuv = ' - ' + $filter('translate')('app.global.juvenile');
                }

                if (!$scope.tip) {
                    $scope.theTip = 'NA' + addJuv;
                } else {
                    $scope.theTip = $scope.tip + addJuv;
                }
            }
        };
    }

})();
