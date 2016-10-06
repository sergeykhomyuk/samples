import IFirewallSucceededResultScope = require('./IFirewallSucceededResultScope');

'use strict';

var firewallSucceededResult = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/result/firewall-succeeded-result.tmpl',
            scope: {
                item: '=',
                onFindMergedBuild: '&'
            },
            link: ($scope: IFirewallSucceededResultScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                $scope.findMergedBuild = () => $scope.onFindMergedBuild();
            }
        };
    }
];

export = firewallSucceededResult;