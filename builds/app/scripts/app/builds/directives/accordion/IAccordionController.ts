import IAccordionGroupScope = require('./IAccordionGroupScope');

interface IAccordionController {
    registerGroup(groupScope: IAccordionGroupScope): void;
    removeGroup(groupScope: IAccordionGroupScope): void;
    toggleGroup(targetGroupScope: IAccordionGroupScope): void;
}

export = IAccordionController;