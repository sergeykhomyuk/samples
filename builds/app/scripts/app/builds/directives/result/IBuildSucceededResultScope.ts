import BuildItem = require('../../models/buildItem');
import DeployTarget = require('../../models/deployTarget');

interface IBuildSucceededResultScope extends ng.IScope {
    item: BuildItem;
    deployTarget: DeployTarget;
    targets: DeployTarget[];

    deployBuild(): void;

    selectDeployTarget(target: DeployTarget): void;
    onDeployBuild(data: { target: DeployTarget }): void;
}

export = IBuildSucceededResultScope;