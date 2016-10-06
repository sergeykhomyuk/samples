import IAccordionController = require('./IAccordionController');
import IAccordionGroupScope = require('./IAccordionGroupScope');

import ArrayUtils = require('../../../framework/arrayUtils');
import Assert = require('../../../framework/assert');

import _ = require('underscore');

'use strict';

/** 
* Accordion controller.
* @class
*/
class AccordionController implements IAccordionController {
    private groups: IAccordionGroupScope[];

    public static $inject: string[] = [];

    /**
     * Accordion controller.
     * @constructor
     */
    constructor() {
        this.groups = [];
    }

    /** 
    * Register group in accordion.
    * @param {object} groupScope - Group scope.
    */
    public registerGroup(groupScope: IAccordionGroupScope): void {
        Assert.isNotNull(groupScope, 'groupScope');
        this.groups.push(groupScope);
    }

    /** 
    * Remove group from accordion.
    * @param {object} groupScope - Group scope.
    */
    public removeGroup(groupScope: IAccordionGroupScope): void {
        Assert.isNotNull(groupScope, 'groupScope');

        ArrayUtils.without(this.groups, groupScope);
    }

    /** 
    * Toggle group in accordion.
    * @param {object} targetGroupScope - Target group scope.
    */
    public toggleGroup(targetGroupScope: IAccordionGroupScope): void {
        Assert.isNotNull(targetGroupScope, 'targetGroupScope');

        var isExpanded: boolean = !targetGroupScope.isExpanded;

        _.each(this.groups, (groupScope: IAccordionGroupScope) => {
            groupScope.isExpanded = false;
        });

        targetGroupScope.isExpanded = isExpanded;
    }
}

var accordion = [
    (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: '/templates/accordion/accordion.tmpl',
            transclude: true,
            replace: true,
            scope: {},
            controller: AccordionController
        };
    }
];

export = accordion;