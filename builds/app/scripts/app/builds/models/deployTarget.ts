import Assert = require('../../framework/assert');

'use strict';

class DeployTarget {
    public id: number;
    public name: string;
    public isDefault: boolean;

    constructor(id: number, name: string, isDefault: boolean) {
        Assert.isNotNull(id, 'id');
        Assert.isNotNull(name, 'name');

        this.id = id;
        this.name = name;
        this.isDefault = isDefault;
    }
}

export = DeployTarget;
