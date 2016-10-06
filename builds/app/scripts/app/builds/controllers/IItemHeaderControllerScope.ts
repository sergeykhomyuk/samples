import Item = require('../models/item');

interface IItemHeaderControllerScope extends ng.IScope {
    item: Item;
    isExpanded: boolean;
    state: {
        isDisabled: boolean;
        isFirewall: boolean;
        isBuild: boolean;
    };
}

export = IItemHeaderControllerScope;