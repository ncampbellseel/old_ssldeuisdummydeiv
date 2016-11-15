/*jshint latedef:false*/

//Factory - FocusInput

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.focus', [])
        .factory('FocusInput', FocusInput);

    FocusInput.$inject = ['$timeout'];

    function FocusInput($timeout) {

        var FocusInput = {};

        FocusInput.init = function(id, dd) {

            return $timeout(function() {
                var element = document.getElementById(id);
                if (dd) {
                    $(element).find('.selectize-input').trigger('click');
                } else if (element) {
                    element.focus();
                }
            }, 2000);
        };

        return FocusInput;

    }

})();
