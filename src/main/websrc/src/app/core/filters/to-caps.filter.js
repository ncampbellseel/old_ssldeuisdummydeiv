/*jshint latedef:false*/

//Factory - toCaps

(function () {
    /*jshint -W004 */

    'use strict';

    angular
        .module('whitelabelApp')
        .filter('toCaps', toCaps);

    toCaps.$inject = [];

    function toCaps() {

        return function (input) {
            if (input) {
                //input = input.toLowerCase();
                return (!!input) ? input.replace('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$', function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) : '';
            }
        };

    }

})();
