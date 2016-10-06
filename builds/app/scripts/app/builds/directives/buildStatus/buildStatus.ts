'use strict';

var buildStatus = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/build-status/build-status.tmpl',
            scope: {
                build: '='
            }
        };
    }
];

export = buildStatus;