interface IAccordionGroupScope extends ng.IScope {
    isExpanded: boolean;
    isDisabled: boolean;

    toggle(): void;
    onToggled(): void;
}

export = IAccordionGroupScope;