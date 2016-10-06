import Assert = require('../../framework/assert');

import MetricsStatus = require('./metricsStatus/metricsStatus');
import BuildStatus = require('./buildStatus/buildStatus');
import TestStatus = require('./testStatus/testStatus');
import Issue = require('./issue/issue');

'use strict';

class Item {
    public id: number;
    public type: number;
    public name: string;
    public createDate: Date;
    public timeStarted: Date;
    public state: number;
    public metrics: MetricsStatus;
    public build: BuildStatus;
    public unitTest: TestStatus;
    public functionalTest: TestStatus;
    public issue: Issue;

    constructor(id: number, type: number, name: string, createDate: Date, timeStarted: Date, state: number, metrics: MetricsStatus, build: BuildStatus, unitTest: TestStatus, functionalTest: TestStatus, issue: Issue) {
        Assert.isNotNull(id, 'id');
        Assert.isNotNull(type, 'type');
        Assert.isNotNull(name, 'name');
        Assert.isNotNull(state, 'state');
        Assert.isNotNull(createDate, 'createDate');

        this.id = id;
        this.type = type;
        this.name = name;
        this.createDate = createDate;
        this.timeStarted = timeStarted;
        this.state = state;
        this.metrics = metrics;
        this.build = build;
        this.unitTest = unitTest;
        this.functionalTest = functionalTest;
        this.issue = issue;
    }
}

export = Item;
