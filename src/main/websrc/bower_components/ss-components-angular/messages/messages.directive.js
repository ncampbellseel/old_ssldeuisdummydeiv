/*jshint latedef:false*/

//Directive - ssMessages

(function () {
    'use strict';

    angular
        .module('ssMessages', [
            'app.service.global'
        ])
        .directive('ssMessages', ssMessages);

    ssMessages.$inject = [];

    function ssMessages() {

        return {
            restrict: 'E',
            templateUrl: 'components/messages/messages.template.html',
            scope: {
                messages: '='
            },
            controller: function ($scope, $timeout, $location, GlobalFactory) {

                $scope.paused = false;

                $scope.goToPage = function (url, force) {

                    if (force) {
                        GlobalFactory.inMotion(true);
                    }
                    $location.path('/' + url);
                };

                $scope.pauseMessages = function (pause) {
                    if (pause) {
                        $scope.paused = true;
                    } else {
                        $scope.paused = false;
                    }
                    console.log($scope.paused);
                };

                $scope.removeItem = function (array, item) {
                    item.dismiss = true;
                    $timeout(function () {
                        _.remove(array, item);
                    }, 300);
                };

                $scope.removeAllMessages = function () {
                    for (var s = 0; s < $scope.messages.length; s++) {
                        $scope.removeItem($scope.messages, $scope.messages[s]);
                    }
                };

                $scope.progress = function (array, item) {

                    item.percent = item.count * 100 / item.countCopy;

                    if (item.count > 0) {
                        $timeout(function () {
                            if ($scope.paused === false) {
                                item.count = item.count - 1;
                            }
                            $scope.progress(array, item);
                        }, 100);
                    } else {
                        $scope.removeItem(array, item);
                    }
                };

                var init = function () {};

                return init();
            }
        };
    }

})();
