/*jshint latedef:false*/

//Controller - AppController

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$timeout', '$interval', '$location', '$filter', '$moment', 'MenuFactory', 'ngDialog', 'matchmedia'];

    /**
     * App controller
     *
     * @param {!angular.Scope} $scope
     * @constructor
     * @ngInject
     * @export
     */

    function AppController($scope, $timeout, $interval, $location, $filter, $moment, MenuFactory, ngDialog, matchmedia) {

        //var vm = this;

        $scope.glob = {};

        $scope.webappUrl = '';

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
            pages: MenuFactory.main()
        };

        $scope.toggleMenu = function() {
            $scope.navOptionsVert.open = !$scope.navOptionsVert.open;
        };

        $scope.toTheTop = function() {
            window.scrollTo(0, 0);
        };

        $scope.today = new Date();

        $scope.close = {};

        $scope.dateOptions = {};
        $scope.dateFormat = 'dd/MM/yyyy';

        $scope.goToPage = function(url, discard) {

            if (discard) {
                $scope.discardSave('app.global.leave.title', 'app.global.leave.message', url);
            } else {
                $location.path('/' + url);
            }
        };

        var init = function() {

        };

        init();

    }

})();
