import ItemPropertyStatus = require('../itemPropertyStatus');

'use strict';

class TestStatus extends ItemPropertyStatus {
    public passedCount: number;
    public failedCount: number;
    public codeCoveragePercent: number;
    
    constructor(state: number, passedCount: number, failedCount: number, codeCoveragePercent: number) {
        super(state);
        this.passedCount = passedCount;
        this.failedCount = failedCount;
        this.codeCoveragePercent = codeCoveragePercent;
    }
}

export = TestStatus;
