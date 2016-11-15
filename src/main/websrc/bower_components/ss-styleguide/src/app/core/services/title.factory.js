/*jshint latedef:false*/

//Factory - TitleFactory

(function () {
    /*jshint -W004 */

    'use strict';

    angular
        .module('xyz.service.title', [])
        .factory('TitleFactory', TitleFactory);

    TitleFactory.$inject = ['$rootScope'];

    function TitleFactory($rootScope) {

        var TitleFactory = {};

        TitleFactory.setTitle = function (title) {
            $rootScope.pageSubTitle = null;
            $rootScope.pageTitle = title;
        };

        TitleFactory.setSubTitle = function (title) {
            $rootScope.pageSubTitle = title;
        };

        return TitleFactory;

    }

})();
