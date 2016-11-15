/*jshint latedef:false*/

//Factory - activeInactive

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('whitelabelApp')
        .filter('activeInactive', activeInactive);

    activeInactive.$inject = [];

    function activeInactive() {

        return function (input) {

            if(input === true || input === 'true') {
                return 'Active';
            }else if(input === false || input === 'false') {
                return 'Inactive';
            }else{
                return input;
            }
        };

    }

})();