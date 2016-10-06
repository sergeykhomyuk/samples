import Item = require('../models/item');
import DeployTarget = require('../models/deployTarget');

interface IItemDetailsControllerScope extends ng.IScope {
    item: Item;

    findIssues(): void;
    deployBuild(target: DeployTarget): void;
    findMergedBuild(): void;

    expandMetrics(): void;
    expandBuild(): void;
    expandUnitTest(): void;
    expandFunctionalTest(): void;

    onFindIssues(): void;
    onDeployBuild(data: { target: DeployTarget }): void;
    onFindMergedBuild(): void;
}

export = IItemDetailsControllerScope;