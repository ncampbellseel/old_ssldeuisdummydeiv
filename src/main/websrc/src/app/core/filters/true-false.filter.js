/*jshint latedef:false*/

//Factory - trueFalse

(function () {
    /*jshint -W004 */

    'use strict';

    angular
        .module('whitelabelApp')
        .filter('trueFalse', trueFalse);

    trueFalse.$inject = [];

    function trueFalse() {

        return function (input) {

            if (input === true || input === 'true') {
                return 'app.global.button.yes';
            } else if (input === false || input === 'false') {
                return 'app.global.button.no';
            } else {
                return input;
            }
        };

    }

})();
