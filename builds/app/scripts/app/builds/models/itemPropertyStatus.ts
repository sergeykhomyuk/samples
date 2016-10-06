import Assert = require('../../framework/assert');

'use strict';

class ItemPropertyStatus {
    public state: number;

    constructor(state: number) {
        Assert.isNotNull(state, 'state');
        this.state = state;
    }
}

export = ItemPropertyStatus;
