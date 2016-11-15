/*jshint latedef:false*/

//Factory - toDec

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('whitelabelApp')
        .filter('toDec', toDec);

    toDec.$inject = [];

    function toDec() {

        return function (input) {
            var number = parseFloat(Math.round(input * 100) / 100).toFixed(2);
            return number.replace(/\.0+$/,'');
        };

    }

})();