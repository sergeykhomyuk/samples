import IAccordionGroupHeaderScope = require('./IAccordionGroupHeaderScope');
import IAccordionGroupController = require('./IAccordionGroupController');

'use strict';

var accordionGroupHeader = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/accordion/accordion-group-header.tmpl',
            transclude: true,
            replace: true,
            scope: {},
            require: '^appAccordionGroup',
            link: ($scope: IAccordionGroupHeaderScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes, accordionGroupController: IAccordionGroupController) => {
                $scope.toggle = () => accordionGroupController.toggle();

                accordionGroupController.watchExpanded((isExpanded: boolean) => {
                    $scope.isExpanded = isExpanded;
                });
            }
        };
    }
];

export = accordionGroupHeader;