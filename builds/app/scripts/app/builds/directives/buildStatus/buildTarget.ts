import IBuildTargetScope = require('./IBuildTargetScope');
import BuildTargetState = require('../../models/buildStatus/buildTargetState');

'use strict';

var buildTarget = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/build-status/build-target.tmpl',
            scope: {
                icon: '@',
                name: '@',
                buildState: '='
            },
            link: ($scope: IBuildTargetScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.state = {
                    isSucceeded: $scope.buildState === BuildTargetState.succeeded,
                    isFailed: $scope.buildState === BuildTargetState.failed
                };
            }
        };
    }
];

export = buildTarget;