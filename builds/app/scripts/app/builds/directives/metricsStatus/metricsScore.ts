import IMetricsScoreScope = require('./IMetricsScoreScope');
import MetricsScoreState = require('../../models/metricsStatus/metricsScoreState');

'use strict';

var metricsScore = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/metrics-status/metrics-score.tmpl',
            scope: {
                name: '@',
                score: '='
            },
            link: ($scope: IMetricsScoreScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.state = {
                    isIncreased: $scope.score.state === MetricsScoreState.increased,
                    isReduced: $scope.score.state === MetricsScoreState.reduced,
                    isNotChanged: $scope.score.state === MetricsScoreState.notChanged
                };
            }
        };
    }
];

export = metricsScore;