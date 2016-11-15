/*jshint latedef:false*/

//Factory - FlashFactory

(function () {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.flash', [
            'LocalStorageModule'
        ])
        .factory('FlashFactory', FlashFactory);

    FlashFactory.$inject = [];

    function FlashFactory() {

        var FlashFactory = {};

        // Flash Flash

        FlashFactory.pushMessage = function (messages, type, count, array, message, link, linkText) {

            if (array) {
                for (var e = 0; e < array.length; e++) {
                    if (array[e].code) {

                        messages.push({
                            'type': type,
                            'dismiss': false,
                            'count': count,
                            'countCopy': count,
                            'percent': 100,
                            'message': array[e].message,
                            'link': link,
                            'linkText': linkText
                        });
                    }
                }
            } else {
                messages.push({
                    'type': type,
                    'dismiss': false,
                    'count': count,
                    'countCopy': count,
                    'percent': 100,
                    'message': message,
                    'link': link,
                    'linkText': linkText
                });
            }

            return messages;
        };

        return FlashFactory;
    }
})();
