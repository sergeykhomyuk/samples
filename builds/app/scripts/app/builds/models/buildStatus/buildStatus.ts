import ItemPropertyStatus = require('../itemPropertyStatus');

'use strict';

class BuildStatus extends ItemPropertyStatus {
    public debugState: number;
    public releaseState: number;
    public completedTime: Date;
    
    constructor(state: number, debugState: number, releaseState: number, completedTime: Date) {
        super(state);
        this.debugState = debugState;
        this.releaseState = releaseState;
        this.completedTime = completedTime;
    }
}

export = BuildStatus;
