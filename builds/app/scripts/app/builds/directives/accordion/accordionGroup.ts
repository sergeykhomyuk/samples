import IAccordionController = require('./IAccordionController');
import IAccordionGroupController = require('./IAccordionGroupController');
import IAccordionGroupScope = require('./IAccordionGroupScope');

import Assert = require('../../../framework/assert');

'use strict';

/** 
* Accordion group controller.
* @class
*/
class AccordionGroupController implements IAccordionGroupController {
    private $scope: IAccordionGroupScope;

    public static $inject: string[] = ['$scope'];

    /**
     * Accordion group controller.
     * @param {object} $scope - Controller scope.
     * @constructor
     */
    constructor($scope: IAccordionGroupScope) {
        Assert.isNotNull($scope, '$scope');

        this.$scope = $scope;

        this.$scope.toggle = () => this.toggle();
    }

    /** 
    * Toggle accordion group.
    */
    public toggle(): void {
        if (!this.$scope.isDisabled) {
            this.$scope.onToggled();
        }
    }

    /** 
    * Watch for expand changed.
    * @param {function} listener - Listener.
    */
    public watchExpanded(listener: (isExpanded: boolean) => void): void {
        this.$scope.$watch('isExpanded', listener);
    }
}

var accordionGroup = [
    (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: '/templates/accordion/accordion-group.tmpl',
            transclude: true,
            replace: true,
            scope: {
                isExpanded: '=expanded',
                isDisabled: '=disabled'
            },
            controller: AccordionGroupController,
            require: '^appAccordion',
            link: ($scope: IAccordionGroupScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes, accordionController: IAccordionController) => {
                accordionController.registerGroup($scope);

                $scope.onToggled = () => accordionController.toggleGroup($scope);

                // Clean up on destroy to avoid of memory leaks.
                $scope.$on('$destroy', () => accordionController.removeGroup($scope));
            }
        };
    }
];

export = accordionGroup;