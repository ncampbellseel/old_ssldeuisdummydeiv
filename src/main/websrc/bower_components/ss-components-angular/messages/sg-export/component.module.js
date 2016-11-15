/*jshint latedef:false*/

//Config - messagesConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(messagesConfig);

    messagesConfig.$inject = ['$routeProvider'];

    function messagesConfig($routeProvider) {

        $routeProvider

            .when('/components/messages', {
            templateUrl: 'components/messages/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssMessages'
                    }]);
                }]
            }
        });

    }

})();

/*jshint latedef:false*/

//Controller - MessagesCtrl

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .controller('MessagesCtrl', MessagesCtrl);

    MessagesCtrl.$inject = ['$scope'];

    function MessagesCtrl($scope) {
        $scope.messages = [];

        $scope.pushSuccess = function () {
            $scope.messages.push({
                'type': 'success',
                'dismiss': false,
                'count': 300,
                'countCopy': 300,
                'percent': 100,
                'message': 'This is a success message',
                'link': null,
                'linkText': null
            });
        };

        $scope.pushError = function () {
            $scope.messages.push({
                'type': 'error',
                'dismiss': false,
                'count': 300,
                'countCopy': 300,
                'percent': 100,
                'message': 'This is an error message',
                'link': null,
                'linkText': null
            });
        };

        $scope.pushWarning = function () {
            $scope.messages.push({
                'type': 'warning',
                'dismiss': false,
                'count': 300,
                'countCopy': 300,
                'percent': 100,
                'message': 'This is a warning message',
                'link': null,
                'linkText': null
            });
        };

        $scope.pushInfo = function () {
            $scope.messages.push({
                'type': 'info',
                'dismiss': false,
                'count': 300,
                'countCopy': 300,
                'percent': 100,
                'message': 'This is an info message',
                'link': null,
                'linkText': null
            });
        };

        $scope.pushButton = function () {
            $scope.messages.push({
                'type': 'success',
                'dismiss': false,
                'count': 300,
                'countCopy': 300,
                'percent': 100,
                'message': 'This is a message with a button',
                'link': '#',
                'linkText': 'View Item'
            });
        };

        $scope.pushSuccess();
    }

})();
