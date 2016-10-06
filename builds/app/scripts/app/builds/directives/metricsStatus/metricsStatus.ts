import MetricsStatus = require('../../models/metricsStatus/metricsStatus');

'use strict';

var metricsStatus = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/metrics-status/metrics-status.tmpl',
            scope: {
                metrics: '='
            }
        };
    }
];

export = metricsStatus;