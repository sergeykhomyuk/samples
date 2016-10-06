import Ladda = require('ladda');

'use strict';

var isLoading = [
    (): ng.IDirective => {
        return {
            restrict: 'A',
            link: ($scope: ng.IScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                var laddaButton: Ladda.ILaddaButton = Ladda.create($element[0]);

                $scope.$watch(attr['isLoading'], (isLoading: boolean) => {
                    if (isLoading) {
                        laddaButton.start();
                    } else {
                        laddaButton.stop();
                    }
                });
            }
        };
    }
];

export = isLoading;