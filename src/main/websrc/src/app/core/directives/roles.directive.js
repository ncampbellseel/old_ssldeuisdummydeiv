/*jshint latedef:false*/

//Directive - roles

(function() {
    'use strict';

    angular
        .module('whitelabelApp')
        .directive('roles', roles);

    roles.$inject = ['AuthFactory', 'GlobalFactory'];

    function roles(AuthFactory, GlobalFactory) {

        return {
            restrict: 'A',

            link: function(scope, element, attrs) {

                var roles = JSON.parse(attrs.roles);

                var hide = true;
                if (roles === undefined || roles === null) {
                    hide = false;
                } else {
                    if (AuthFactory.getRole()) {
                        if (roles.length > 0) {
                            hide = !GlobalFactory.inArray(roles, AuthFactory.getRole());
                        } else {
                            hide = false;
                        }
                    }
                }

                if (hide) {
                    element.addClass('ng-hide');
                }

            }
        };

    }

})();
