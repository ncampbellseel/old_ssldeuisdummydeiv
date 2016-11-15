/*jshint latedef:false*/

//Factory - ValidationFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.validation', [])
        .factory('ValidationFactory', ValidationFactory);

    ValidationFactory.$inject = ['GlobalFactory'];

    function ValidationFactory(GlobalFactory) {

        var ValidationFactory = {};

        // Check Valid Time and Date

        ValidationFactory.hasDateValid = function(list, aDate, aTime, step, check, rootErrors, entryValid) {

            var errors = [];

            if (step) {
                step = 'Activity ' + step + ': ';
            } else {
                step = '';
            }

            if (GlobalFactory.inArray(list, 'date')) {
                if (!aDate) {
                    errors.push(step + 'You have an activity date that is not valid.');
                    entryValid = false;
                } else {
                    if (aDate === 'past') {
                        errors.push(step + 'You have an activity date too far in the past.');
                        entryValid = false;
                    }
                    if (aDate === 'future') {
                        errors.push(step + 'You have an activity date too far in the future.');
                        entryValid = false;
                    }
                }
            }

            if (GlobalFactory.inArray(list, 'time')) {
                if (!aTime) {
                    errors.push(step + 'You have an activity time that is not valid.');
                    entryValid = false;
                } else {
                    if (aTime === 'past') {
                        errors.push(step + 'You have an activity time too far in the past.');
                        entryValid = false;
                    }
                    if (aTime === 'future') {
                        errors.push(step + 'You have an activity time too far in the future.');
                        entryValid = false;
                    }
                }
            }

            if (!check) {
                errors = _.uniqWith(errors, _.isEqual);
                for (var e in errors) {
                    rootErrors.push(errors[e]);
                }
            }

            return entryValid;
        };

        return ValidationFactory;
    }
})();
