import Item = require('../../models/item');

interface IRejectedResultScope extends ng.IScope {
    item: Item;

    findIssues(): void;
    onFindIssues(): void;
}

export = IRejectedResultScope;