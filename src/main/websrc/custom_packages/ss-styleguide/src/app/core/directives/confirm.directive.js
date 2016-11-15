/*jshint latedef:false*/

//Directive - ngReallyClick

(function () {
'use strict';

angular
    .module('xyzApp')
    .directive('ngReallyClick', ngReallyClick);

ngReallyClick.$inject = [];

function ngReallyClick() {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    };

}

})();
