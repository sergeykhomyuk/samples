import State = require('../models/state');
import IItemStateScope = require('./IItemStateScope');

'use strict';

var itemState = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/item-state.tmpl',
            scope: {
                state: '=',
                completedText: '@?',
                failedText: '@?',
                runningText: '@?',
                pendingText: '@?'
            },
            link: ($scope: IItemStateScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.states = State;
            }
        };
    }
];

export = itemState;