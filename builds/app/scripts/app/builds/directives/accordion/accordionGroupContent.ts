import IAccordionGroupController = require('./IAccordionGroupController');
import IAccordionGroupContentScope = require('./IAccordionGroupContentScope');

'use strict';

var accordionGroupContent = [
    (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: '/templates/accordion/accordion-group-content.tmpl',
            transclude: true,
            replace: true,
            scope: {},
            require: '^appAccordionGroup',
            link: ($scope: IAccordionGroupContentScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes, accordionGroupController: IAccordionGroupController) => {
                accordionGroupController.watchExpanded((isExpanded: boolean) => {
                    $scope.isExpanded = isExpanded;
                });
            }
        };
    }
];

export = accordionGroupContent;