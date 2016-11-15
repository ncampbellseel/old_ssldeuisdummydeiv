/*jshint latedef:false*/

//Factory - GlobalFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.global', [])
        .factory('GlobalFactory', GlobalFactory);

    GlobalFactory.$inject = ['$filter', '$moment'];

    function GlobalFactory($filter, $moment) {

        var GlobalFactory = {};

        // Flip Date 

        GlobalFactory.flipDate = function(date) {
            if (date.length === 10) {
                var BDate = date.split(/\//);
                var ADate = [BDate[1], BDate[0], BDate[2]].join('/');
                date = new Date(ADate);
                return date;
            }
        };

        //  Date Valid

        /**
        * Service - Date Valid - Initial validation checks whether the date exists along with valid date pattern. Will return a boolean value based on the validity of the date value. 
        * @param {String} date Date string.
        * @param {String} time Time string.
        * @param {String} check Check string.
        * @param {String} minimum date string.        
        * @param {Boolean} allowFuture Determines whether or not a future date is allowed.
        * @returns {Boolean} Will return false if the length of the string is less than 10.
        */

        GlobalFactory.dateValid = function (date, time, check, minimum, allowFuture) {

            var datePattern = 'DD-MM-YYYY';

            var now = $moment();

            if (date && $moment(date, datePattern).isValid()) {

                if (date.length < 10) {
                    return false;
                }

                date = $moment(date, datePattern);

                if (check) {
                    if (time) {
                        time = $moment.utc(time, 'HH:mm');
                        if (!date) {
                            date = $moment.utc('01/01/1970', datePattern);
                        }
                        if (date && $moment.utc(date, datePattern).isValid()) {
                            date.hour(time.get('hour')).minute(time.get('minute'));
                        }
                    } else {
                        return false;
                    }
                } else if (minimum && !check && !time) {

                    var copy_time = new Date($moment(date, datePattern));
                    var copy_minimum_time = new Date(minimum);

                    if (copy_time.setHours(0, 0, 0, 0) === copy_minimum_time.setHours(0, 0, 0, 0)) {
                        var inter = new Date(minimum);
                        date.hour(inter.getHours());
                        date.minute(inter.getMinutes());
                        date.second(inter.getSeconds());
                    }
                }

                if (date) {
                    if (date <= now) {
                        if (minimum) {
                            if (date >= minimum) {
                                return true;
                            } else {
                                return 'past';
                            }
                        }
                        return true;

                    } else {

                        if (allowFuture) {
                            var futureDate = now.add(allowFuture, 'days');
                            if (date < futureDate) {
                                return true;
                            }
                        }
                        if (!date) {
                            return false;
                        }
                        return 'future';
                    }
                }
            }
            return false;
        };

        // Remove from Array

        GlobalFactory.removeFromArray = function(array, item) {

            while (1 === 1) {
                var index = array.lastIndexOf(item);
                if (index >= 0) {
                    array.splice(index, 1);
                } else {
                    break;
                }
            }
        };

        // Remove by attribute

        GlobalFactory.removeByAttribute = function(arr, attr, value) {
            var i = arr.length;
            while (i--) {
                if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {

                    arr.splice(i, 1);

                }
            }
            return arr;

        };

        //Remove duplicates from array 

        GlobalFactory.removeDuplicates = function(list) {

            var result = [];
            $.each(list, function(i, e) {
                if ($.inArray(e, result) === -1) {
                    result.push(e);
                }
            });

            return result;
        };

        // Is empty

        GlobalFactory.isEmpty = function(arr) {

            var empty = true;

            if (arr.length === 0) {
                return empty;
            }

            for (var i = 0; i < arr.length; i++) {
                if (!angular.equals({}, arr[i])) {
                    empty = false;
                }
            }
            return empty;
        };

        GlobalFactory.setAsDate = function(date, time) {

            var datePattern = 'DD-MM-YYYY';

            var newDate;
            var newTime;

            if (GlobalFactory.dateValid(date, false, false) && GlobalFactory.dateValid(date, time, true)) {
                newDate = $moment(date, datePattern);
                newTime = $moment(time, 'HH:mm');
                newDate.hour(newTime.get('hour')).minute(newTime.get('minute')).utcOffset();

            } else if (GlobalFactory.dateValid(date, false, false)) {
                newDate = $moment(date, datePattern);
                newDate.hour(0).minute(0).second(0).utcOffset();
            }
            return newDate;
        };


        GlobalFactory.isObject = function(obj) {
            return obj === Object(obj);
        };

        GlobalFactory.updateStep = function(completedSteps, step) {
            if ($.inArray(step, completedSteps) === -1) {
                return completedSteps.push(step);
            }
        };

        GlobalFactory.inArray = function(array, thing) {
            if ($.inArray(thing, array) > -1) {
                return true;
            }
            return false;
        };

        GlobalFactory.showStep = function(completedSteps, step) {
            if ($.inArray(step, completedSteps) !== -1) {
                return true;
            } else {
                var tot = completedSteps + 1;
                if (tot === step) {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        };

        return GlobalFactory;
    }
})();
