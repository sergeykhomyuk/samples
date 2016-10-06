import IIssueTypeMessageScope = require('./IIssueTypeMessageScope');

import IssueType = require('../../models/issue/issueType');

'use strict';

var issueTypeMessage = [
    (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: '/templates/builds/issue/issue-type-message.tmpl',
            scope: {
                issueType: '='
            },
            link: ($scope: IIssueTypeMessageScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.state = {
                    isMetricsReduction: $scope.issueType === IssueType.metricsReduction,
                    isBuildFailed: $scope.issueType === IssueType.buildFailed,
                    isUnitTestFailed: $scope.issueType === IssueType.unitTestFailed,
                    isFunctionalTestFailed: $scope.issueType === IssueType.functionalTestFailed
                };
            }
        };
    }
];

export = issueTypeMessage;