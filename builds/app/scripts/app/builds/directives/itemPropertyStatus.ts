import State = require('../models/state');
import IItemPropertyStatusScope = require('./IItemPropertyStatusScope');

'use strict';

var itemPropertyStatus = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/item-property-status.tmpl',
            transclude: true,
            scope: {
                name: '@',
                propertyState: '=',
                onExpand: '&'
            }, 
            link: ($scope: IItemPropertyStatusScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.state = {
                    isSucceeded: $scope.propertyState === State.succeeded,
                    isFailed: $scope.propertyState === State.failed
                };

                $scope.expand = () => $scope.onExpand();
            }
        };
    }
];

export = itemPropertyStatus;