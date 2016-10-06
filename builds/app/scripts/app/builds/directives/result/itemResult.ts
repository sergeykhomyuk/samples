import Item = require('../../models/item');
import DeployTarget = require('../../models/deployTarget');
import IItemResultScope = require('./IItemResultScope');
import ItemType = require('../../models/itemType');
import State = require('../../models/state');

import Assert = require('../../../framework/assert');

'use strict';

var itemResult = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/result/item-result.tmpl',
            scope: {
                item: '=',
                onFindIssues: '&',
                onDeployBuild: '&',
                onFindMergedBuild: '&'
            },
            link: ($scope: IItemResultScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.state = {
                    isFirewall: $scope.item.type === ItemType.firewall,
                    isBuild: $scope.item.type === ItemType.build,
                    isSucceeded: $scope.item.state === State.succeeded,
                    isFailed: $scope.item.state === State.failed
                }

                $scope.findIssues = () => $scope.onFindIssues();

                $scope.findMergedBuild = () => $scope.onFindMergedBuild();

                $scope.deployBuild = (target: DeployTarget) => {
                    Assert.isNotNull(target, 'target');

                    $scope.onDeployBuild({ target: target });
                };                
            }
        };
    }
];

export = itemResult;