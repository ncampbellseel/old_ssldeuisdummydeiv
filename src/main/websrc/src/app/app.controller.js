/*jshint latedef:false*/

//Controller - AppController

(function () {

    'use strict';

    angular
        .module('whitelabelApp')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$timeout', '$interval', '$location', '$filter', '$moment', 'ApiUrl', 'ReferenceFactory', 'StorageFactory', 'GlobalFactory', 'NotificationsFactory', 'ValidationFactory', 'AuthFactory', 'MenuFactory', 'ngDialog', 'matchmedia'];

    /**
     * App controller
     *
     * @param {!angular.Scope} $scope
     * @constructor
     * @ngInject
     * @export
     */

    function AppController($scope, $timeout, $interval, $location, $filter, $moment, ApiUrl, ReferenceFactory, StorageFactory, GlobalFactory, NotificationsFactory, ValidationFactory, AuthFactory, MenuFactory, ngDialog, matchmedia) {

        //var vm = this;

        $scope.glob = {};

        $scope.webappUrl = '';
        // @if DEBUG=true
        $scope.webappUrl = '/webapp';
        // @endif

        $scope.media = {
            phone: false,
            tablet: false,
            desktop: false
        };

        matchmedia.on('(min-width: 0px) and (max-width: 689px)', function (query) {
            if (query.matches) {
                $scope.media.phone = true;
            } else {
                $scope.media.phone = false;
            }
        });

        matchmedia.on('(min-width: 690px) and (max-width: 919px)', function (query) {
            if (query.matches) {
                $scope.media.tablet = true;
            } else {
                $scope.media.tablet = false;
            }
        });

        matchmedia.on('(min-width: 920px)', function (query) {
            if (query.matches) {
                $scope.media.desktop = true;
            } else {
                $scope.media.desktop = false;
            }
        });

        $scope.navOptionsVert = {
            open: true,
            mini: false,
            media: $scope.media,
            type: 'vert',
            pages: MenuFactory.main(),
            account: MenuFactory.account()
        };

        $scope.navOptionsAccount = {
            open: null,
            mini: null,
            media: $scope.media,
            type: 'horz',
            pages: MenuFactory.account()
        };

        $scope.toggleMenu = function () {
            $scope.navOptionsVert.open = !$scope.navOptionsVert.open;
        };

        $scope.placeholder = 'app.global.all';

        $scope.dateStyle = 'MM/dd/yyyy';

        $scope.updateWorktasks = function () {
            NotificationsFactory.connect()
                .success(function (data) {

                    $scope.completedWorkTasks = [];
                    $scope.availableWorkTasks = [];

                    for (var s = 0; s < data.length; s++) {

                        if (data[s].taskStatus === 'Completed') {
                            $scope.completedWorkTasks.push(data[s]);
                        } else {
                            $scope.availableWorkTasks.push(data[s]);
                        }
                    }

                });
        };

        $scope.updateWorktasks();

        $interval(function () {
            $scope.updateWorktasks();
        }, 180000);

        $scope.toTheTop = function () {
            window.scrollTo(0, 0);
        };

        $scope.isExternal = function () {
            if ($location.$$path === '/login') {
                return true;
            }
            return false;
        };

        $scope.removeFromArray = function (array, item) {
            return GlobalFactory.removeFromArray(array, item);
        };

        $scope.checkValidDate = function (date, dep, allowFuture) {
            return GlobalFactory.dateValid(date, false, false, dep, allowFuture);
        };

        $scope.checkValidTime = function (date, time, dep, allowFuture) {
            return GlobalFactory.dateValid(date, time, true, dep, allowFuture);
        };

        $scope.inArray = function (array, thing) {
            return GlobalFactory.inArray(array, thing);
        };

        $scope.hasEntry = function (entry) {
            if (entry) {
                if (entry !== 0 && entry !== '0' && entry !== null) {
                    return true;
                }
            }
            return false;
        };

        $scope.focusPrevious = function (name, array, dd) {
            var id = name + (array.length - 1);
            if (dd) {
                $timeout(function () {
                    $('#' + id).find('.selectize-input:first').trigger('click');
                });
            } else {
                var element = document.getElementById(id);
                element.focus();
            }
        };

        $scope.today = new Date();

        $scope.credentials = {
            user: {}
        };

        $scope.errors = [];
        $scope.messages = [];

        $scope.close = {};

        $scope.dateOptions = {};
        $scope.dateFormat = 'dd/MM/yyyy';

        $scope.credentials.user.username = 'user1';
        $scope.credentials.user.password = 'user1';

        $scope.isAuthenticated = function () {
            if (!$scope.credentials || !$scope.credentials.user) {
                $scope.logout();
            }
        };

        $scope.logout = function () {
            $scope.credentials = {};
            $location.path('/location');
        };

        $scope.discardSave = function (title, message, url) {

            $scope.close = {
                title: title,
                message: message
            };

            ngDialog.open({
                templateUrl: 'core/elements/discard.template.html',
                scope: $scope,
                preCloseCallback: function (value) {
                    if (value === true) {
                        $scope.goToPage(url);
                    }
                }
            });
        };

        $scope.hasDateValid = function (list, date, time, step, check, errors, valid) {
            return ValidationFactory.hasDateValid(list, date, time, step, check, errors, valid);
        };

        $scope.checkNextEntry = function (check, array) {

            if (!check) {
                for (var i in array) {
                    if (!array[i].isValid) {
                        return false;
                    }
                }
            }
            return true;
        };

        $scope.goToPage = function (url, discard) {

            if (discard) {
                $scope.discardSave('app.global.leave.title', 'app.global.leave.message', url);
            } else {
                $location.path('/' + url);
            }
        };

        var init = function () {

            $scope.animation = {
                headIcon: 'animated fadeInLeft',
                headText: 'animated fadeInDown'
            };

            $scope.completedWorkTasks = [];
            $scope.availableWorkTasks = [];

            AuthFactory.setRole('admin');

        };

        init();

    }

})();
