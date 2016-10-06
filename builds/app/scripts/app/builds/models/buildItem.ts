import Item = require('./item');
import ItemType = require('./itemType');
import DeployTarget = require('./deployTarget');
import MetricsStatus = require('./metricsStatus/metricsStatus');
import BuildStatus = require('./buildStatus/buildStatus');
import TestStatus = require('./testStatus/testStatus');
import Issue = require('./issue/issue');

import Assert = require('../../framework/assert');

'use strict';

class BuildItem extends Item {
    public deployTargets: DeployTarget[];

    constructor(id: number, name: string, createDate: Date, timeStarted: Date, state: number, metrics: MetricsStatus, build: BuildStatus, unitTest: TestStatus, functionalTest: TestStatus, deployTargets: DeployTarget[], issue: Issue) {
        super(id, ItemType.build, name, createDate, timeStarted, state, metrics, build, unitTest, functionalTest, issue);

        Assert.isNotNull(deployTargets, 'deployTargets');
        this.deployTargets = deployTargets;
    }
}

export = BuildItem;
