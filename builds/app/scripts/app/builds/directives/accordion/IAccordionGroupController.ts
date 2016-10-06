interface IAccordionGroupController {
    toggle(): void;
    watchExpanded(listener: (isExpanded: boolean) => void): void;
}

export = IAccordionGroupController;