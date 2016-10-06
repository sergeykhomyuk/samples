import Item = require('../../models/item');
import DeployTarget = require('../../models/deployTarget');
import ItemType = require('../../models/itemType');
import State = require('../../models/state');

interface IItemResultScope extends ng.IScope {
    item: Item;
    state: {
        isFirewall: boolean;
        isBuild: boolean;
        isSucceeded: boolean;
        isFailed: boolean;
    }

    findIssues(): void;
    deployBuild(target: DeployTarget): void;
    findMergedBuild(): void;

    onFindIssues(): void;
    onDeployBuild(data: { target: DeployTarget }): void;
    onFindMergedBuild(): void;
}

export = IItemResultScope;