/*jshint latedef:false*/

//Controller - LoginCtrl

(function() {

    'use strict';

    angular
        .module('whitelabelApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$http', '$location', '$timeout', 'AuthFactory', 'FocusInput', 'TitleFactory'];

    function LoginCtrl($scope, $http, $location, $timeout, AuthFactory, FocusInput, TitleFactory) {

        TitleFactory.setTitle('app.login.name');

        $scope.$on('$viewContentLoaded', function() {
            FocusInput.init('username');
        });

        $scope.hasError = false;

        $scope.login = function() {
            $scope.credentials.message = null;

            if (!$scope.credentials.user || (!$scope.credentials.user.username && !$scope.credentials.user.password)) {
                $scope.errors.push('app.login.field.username.error');
                $scope.errors.push('app.login.field.password.error');
                return;
            } else if (!$scope.credentials.user.username) {
                $scope.errors.push('app.login.field.username.error');
                return;
            } else if (!$scope.credentials.user.password) {
                $scope.errors.push('app.login.field.password.error');
                return;
            }

            $scope.loggingIn = true;
            $scope.errors = [];

            AuthFactory.setToken('true');
            AuthFactory.setRole('admin');
            AuthFactory.setRemember(true);
            $timeout(function() {
                $location.path('/dashboard');
            });
        };


    }

})();
