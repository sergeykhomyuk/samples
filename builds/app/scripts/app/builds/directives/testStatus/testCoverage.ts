'use strict';

var testCoverage = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/test-status/test-coverage.tmpl',
            scope: {
                coveragePercent: '='
            }
        };
    }
];

export = testCoverage;