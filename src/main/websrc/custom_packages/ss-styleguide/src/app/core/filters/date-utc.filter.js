/*jshint latedef:false*/

//Factory - dateUTC

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('xyzApp')
        .filter('dateUTC', dateUTC);

    dateUTC.$inject = ['$filter'];

    function dateUTC($filter) {

        return function(date) {

            var d = new Date(date);
            var n = d.getTime();

            if ($filter('date')(n, 'HH:mm:ss', 'UTC') === '00:00:00' || $filter('date')(n, 'HH:mm:ss', 'UTC') === '23:59:59') {
                return $filter('date')(date, 'dd/MM/yyyy', 'UTC');
            } else {
                return $filter('date')(date, 'dd/MM/yyyy - HH:mm', 'UTC');
            }
        };

    }

})();
