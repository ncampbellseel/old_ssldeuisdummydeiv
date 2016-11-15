/*jshint latedef:false*/

//Factory - NotificationsFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.notifications', [
            'app.service.api'
        ])
        .factory('NotificationsFactory', NotificationsFactory);

    NotificationsFactory.$inject = ['$http', '$location', 'ApiUrl'];

    function NotificationsFactory($http, $location, ApiUrl) {

        var NotificationsFactory = {};
        var poe = 'notifications';

        // Connect

        NotificationsFactory.connect = function() {

            return $http.get(ApiUrl.connect() + poe + '/latest', {});
        };

        // Completed

        NotificationsFactory.completed = function(id) {

            return $http.get(ApiUrl.connect() + poe + '/complete/' + id, {});
        };

        return NotificationsFactory;
    }
})();
