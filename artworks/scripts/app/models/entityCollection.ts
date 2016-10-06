import Entity = require('./entity');

'use strict';

class EntityCollection<TEntity extends Entity> {
    public parentId: number;
    public url: string;
    public items: TEntity[];
    public isResolved: boolean;

    constructor() {
        this.isResolved = false;
        this.items = [];
    }
}

export = EntityCollection;
