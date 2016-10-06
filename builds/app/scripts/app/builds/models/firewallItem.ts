import Item = require('./item');
import ItemType = require('./itemType');
import MetricsStatus = require('./metricsStatus/metricsStatus');
import BuildStatus = require('./buildStatus/buildStatus');
import TestStatus = require('./testStatus/testStatus');
import Issue = require('./issue/issue');

import Assert = require('../../framework/assert');

'use strict';

class FirewallItem extends Item {
    public owner: string;

    constructor(id: number, name: string, owner: string, createDate: Date, timeStarted: Date, state: number, metrics: MetricsStatus, build: BuildStatus, unitTest: TestStatus, functionalTest: TestStatus, issue: Issue) {
        super(id, ItemType.firewall, name, createDate, timeStarted, state, metrics, build, unitTest, functionalTest, issue);

        Assert.isNotNull(owner, 'owner');
        this.owner = owner;
    }
}

export = FirewallItem;
