/*jshint latedef:false*/

//Factory - AuthFactory

(function () {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.auth', [
            'app.service.api',
            'LocalStorageModule',
            'ab-base64',
        ])
        .factory('AuthFactory', AuthFactory);

    AuthFactory.$inject = ['$http', '$location', '$rootScope', '$timeout', '$window', 'ApiUrl', 'base64', 'localStorageService'];

    function AuthFactory($http, $location, $rootScope, $timeout, $window, ApiUrl, base64, localStorageService) {

        var AuthFactory = {};
        AuthFactory.loggedIn = false;
        var poe = 'auth';

        //  Login

        AuthFactory.login = function () {

            // return $http({
            //     method: 'POST',
            //     url: ApiUrl.connect() + poe + '/login',
            //     headers: {},
            //     data: angular.toJson(data)
            // });
            return $http.get(ApiUrl.connect() + poe + '/login', {});

        };

        // Token Handlers

        AuthFactory.checkToken = function () {

            //Set logged out as false by default

            AuthFactory.loggedIn = false;

            if (AuthFactory.getRemember() && localStorageService.get('token')) {

                AuthFactory.loggedIn = true;

            } else {

                if ($rootScope.token) {
                    AuthFactory.loggedIn = true;
                }
            }
            return AuthFactory.loggedIn;
        };

        AuthFactory.getToken = function () {

            if (localStorageService.get('token')) {

                return base64.decode(localStorageService.get('token'));

            } else {

                if ($rootScope.token) {
                    return base64.decode($rootScope.token);
                }
            }
        };

        AuthFactory.setToken = function (token) {

            if (token) {

                //Check if remember token is set, if so set bearer token in local storage

                if (AuthFactory.getRemember()) {
                    localStorageService.set('token', base64.encode(token));
                } else {
                    $rootScope.token = base64.encode(token);
                }
            }
        };

        AuthFactory.removeToken = function () {

            $rootScope.token = null;

            //Check if remember token is set, if so set bearer token in local storage

            if (AuthFactory.getRemember() && localStorageService.get('token')) {
                localStorageService.remove('token');
            }

        };

        // Remember Token Handlers

        AuthFactory.getRemember = function () {

            if (localStorageService.get('remember_me')) {
                return localStorageService.get('remember_me');
            }
        };

        AuthFactory.setRemember = function (remember_me) {

            if (remember_me === true) {
                localStorageService.set('remember_me', remember_me);
            } else {
                AuthFactory.removeRemember();
            }
        };

        AuthFactory.removeRemember = function () {

            localStorageService.remove('remember_me');
        };

        // Remember Role Handlers

        AuthFactory.getRole = function () {

            if (localStorageService.get('lvl')) {
                return localStorageService.get('lvl');
            }
        };

        AuthFactory.setRole = function (lvl) {

            if (lvl) {
                localStorageService.set('lvl', lvl);
            } else {
                AuthFactory.removeRole();
            }
        };

        AuthFactory.removeRole = function () {

            localStorageService.remove('lvl');
        };

        // Logout

        AuthFactory.clearData = function () {
            AuthFactory.removeToken();
            AuthFactory.removeRemember();
            AuthFactory.removeRole();
            // UserFactory.removeAvatar();
            // UserFactory.removeUsername();
            // UserFactory.removeEmail();
        };

        AuthFactory.logout = function () {

            AuthFactory.clearData();
            $timeout(function () {
                $location.path('/login');
            }, 600);
        };

        return AuthFactory;
    }
})();
