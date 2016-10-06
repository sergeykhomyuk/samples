import IssueType = require('../../models/issue/issueType');
import IRejectedResultScope = require('./IRejectedResultScope');

'use strict';

var rejectedResult = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/result/rejected-result.tmpl',
            scope: {
                item: '=',
                onFindIssues: '&'
            },
            link: ($scope: IRejectedResultScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.findIssues = () => $scope.onFindIssues();
            }
        };
    }
];

export = rejectedResult;