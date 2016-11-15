/*jshint latedef:false*/

//Config - whitelabelAppConfig

(function () {

    'use strict';

    angular
        .module('whitelabelApp', [
            'ngRoute',
            'ngSanitize',
            'ngDialog',
            'ngAria',
            'ngAnimate',
            'selectize',
            'templateKeeper',
            'LocalStorageModule',
            'angAccordion',
            '720kb.tooltips',
            'matchmedia-ng',
            'angularRipple',
            'ssMenu',
            'ssMenuItem',
            'ssDatePicker',
            'ssTimePicker',
            'ssCheckbox',
            'ssTabset',
            'ssTab',
            'ssLoader',
            'ssSelect',
            'ssBackToTop',
            'ssMessages',
            'ssButton',
            'angular-momentjs',
            'pascalprecht.translate',
            'app.service.menu',
            'app.service.news',
            'app.service.title',
            'app.service.auth',
            'app.service.storage',
            'app.service.saveforms',
            'app.service.validation',
            'app.service.flash',
            'app.service.api',
            'app.service.search',
            'app.service.global',
            'app.service.reference',
            'app.service.notifications',
            'app.service.focus'
        ])
        .config(whitelabelAppConfig);

    whitelabelAppConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$provide', 'localStorageServiceProvider', 'ngDialogProvider', '$translateProvider', 'tooltipsConfProvider'];

    function whitelabelAppConfig($routeProvider, $locationProvider, $httpProvider, $provide, localStorageServiceProvider, ngDialogProvider, $translateProvider, tooltipsConfProvider) {

        $provide.decorator('$templateCache', function ($delegate) {
            var originalGet = $delegate.get;

            $delegate.get = function (key) {
                var value;
                value = originalGet(key);
                if (!value) {

                    if (value) {
                        $delegate.put(key, value);
                    }
                }
                return value;
            };

            return $delegate;
        });

        $locationProvider.baseHref = '/webapp';

        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        // Answer edited to include suggestions from comments
        // because previous version of code introduced browser-related errors

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get.Pragma = 'no-cache';

        $translateProvider
            .useStaticFilesLoader({
                prefix: 'locales/',
                suffix: '.json'
            })
            .preferredLanguage('en')
            .fallbackLanguage('en');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $translateProvider.useSanitizeValueStrategy('sanitize');

        localStorageServiceProvider
            .setPrefix('whitelabel')
            .setStorageType('localStorage')
            .setNotify(true, true);

        localStorageServiceProvider
            .setStorageCookie(45, '/');

        $routeProvider

            .when('/logout', {
            reloadOnSearch: false
        })

        .otherwise({
            redirectTo: '/login'
        });

        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            showClose: true,
            closeByDocument: true,
            closeByEscape: true
        });

        tooltipsConfProvider.configure({
            'smart': true,
            'size': 'small',
            'speed': 'fast'
        });

    }

})();

//Constant - whitelabelAppConstant

(function () {

    'use strict';

    angular
        .module('whitelabelApp')
        .constant('_', window._);

})();

//Run - whitelabelAppRun

(function () {

    'use strict';

    angular
        .module('whitelabelApp')
        .run(whitelabelAppRun);

    whitelabelAppRun.$inject = ['$rootScope', '$location', '$window', 'AuthFactory', 'GlobalFactory'];

    function whitelabelAppRun($rootScope, $location, $window, AuthFactory, GlobalFactory) {

        $rootScope._ = window._;

        /**
         * Watch for route change
         * @param {String} event
         * @param {String} next
         * @return {String} sum
         */

        $rootScope.$on('$routeChangeStart', function (event, next) {

            window.scrollTo(0, 0);

            if (next.hideMenu) {
                $rootScope.hideMenu = true;
            } else {
                $rootScope.hideMenu = false;
            }

            if ($location.path() === '/logout') {
                AuthFactory.logout();
            }

            if (next.requireLogin) {
                if (AuthFactory.checkToken() === false) {
                    $location.path('/login');
                    event.preventDefault();
                } else {
                    if (next.roleTypes) {
                        if (!GlobalFactory.inArray(next.roleTypes, AuthFactory.getRole())) {
                            $location.path('/dashboard');
                            event.preventDefault();
                        }
                    }
                }
            }
        });

    }

})();
