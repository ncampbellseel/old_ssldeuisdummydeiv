/*jshint latedef:false*/

//Factory - fullDateUTC

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('whitelabelApp')
        .filter('fullDateUTC', fullDateUTC);

    fullDateUTC.$inject = ['$filter'];

    function fullDateUTC($filter) {

        return function(date) {
            return $filter('date')(date, 'fullDate', 'UTC');
        };

    }

})();
