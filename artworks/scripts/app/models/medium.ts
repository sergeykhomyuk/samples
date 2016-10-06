import Entity = require('./entity');

'use strict';

class Medium extends Entity {
    public name: string;
    public dimensions: number;

    constructor() {
        super();
    }
}

export = Medium;
