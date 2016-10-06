import Item = require('../models/item');
import DeployTarget = require('../models/deployTarget');

interface IItemControllerScope extends ng.IScope {
    item: Item;

    state: {
        isDisabled: boolean;
        isExpanded: boolean;
        isSucceeded: boolean;
        isFailed: boolean;
        isRunning: boolean;
        isPending: boolean;
    }

    findIssues(): void;
    deployBuild(target: DeployTarget): void;
    findMergedBuild(): void;
}

export = IItemControllerScope;