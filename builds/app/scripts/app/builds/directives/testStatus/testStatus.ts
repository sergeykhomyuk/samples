'use strict';

var testStatus = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/test-status/test-status.tmpl',
            scope: {
                test: '='
            }
        };
    }
];

export = testStatus;