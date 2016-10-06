import Assert = require('../../../framework/assert');

'use strict';

class MetricsScore {
    public value: number;
    public state: number;

    constructor(value: number, state: number) {
        Assert.isNotNull(value, 'value');
        Assert.isNotNull(state, 'state');

        this.value = value;
        this.state = state;
    }
}

export = MetricsScore;
