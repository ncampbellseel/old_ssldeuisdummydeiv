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

            AuthFactory.login($scope.credentials)
                .success(function(data) {
                    console.log(data);
                    if (data.message && data.message.error) {
                        $scope.errors.push('Invalid credentials provided.');
                    } else {
                        AuthFactory.setToken(data.user.authToken);
                        AuthFactory.setRole('admin');
                        AuthFactory.setRemember(true);
                        $timeout(function () {
                            $location.path('/dashboard');
                        });
                    }
                    $scope.loggingIn = false;
                })
                .error(function(data, status) {
                    $scope.loggingIn = false;
                    console.log('AJAX Error in login request: ' + status);
                    $scope.errors.push('Sorry, an error occured while trying to log in.');
                });
        };


    }

})();