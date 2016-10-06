import Assert = require('../../../framework/assert');

'use strict';

class Issue {
    public type: number;
    public name: string;
    public description: string;

    constructor(type: number, name: string, description: string) {
        Assert.isNotNull(type, 'type');
        Assert.isNotNull(name, 'name');
        Assert.isNotNull(description, 'description');

        this.type = type;
        this.name = name;
        this.description = description;
    }
}

export = Issue;
