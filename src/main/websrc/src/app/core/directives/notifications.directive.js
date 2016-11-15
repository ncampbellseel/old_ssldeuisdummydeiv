/*jshint latedef:false*/

//Directive - ssNotifications

(function () {
    'use strict';

    angular
        .module('whitelabelApp')
        .directive('ssNotifications', ssNotifications);

    ssNotifications.$inject = [];

    function ssNotifications() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/notifications.template.html'
        };

    }

})();
