import State = require('../models/state');

interface IItemPropertyStatusScope extends ng.IScope {
    propertyState: number;
    state: {
        isSucceeded: boolean;
        isFailed: boolean;
    };

    expand(): void;
    onExpand(): void;
}

export = IItemPropertyStatusScope;