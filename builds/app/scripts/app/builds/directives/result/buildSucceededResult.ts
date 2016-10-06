import IBuildSucceededResultScope = require('./IBuildSucceededResultScope');
import DeployTarget = require('../../models/deployTarget');
import _ = require('underscore');

'use strict';

var buildSucceededResult = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/result/build-succeeded-result.tmpl',
            scope: {
                item: '=',
                onDeployBuild: '&'
            },
            link: ($scope: IBuildSucceededResultScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.targets = $scope.item.deployTargets;
                $scope.deployTarget = _.find($scope.targets, (target: DeployTarget) => target.isDefault);

                $scope.deployBuild = () => $scope.onDeployBuild({ target: $scope.deployTarget });
                
                $scope.selectDeployTarget = (target: DeployTarget) => {
                    $scope.deployTarget = target;
                }
            }
        };
    }
];

export = buildSucceededResult;