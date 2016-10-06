'use strict';

class Entity {
    public id: number;
    public url: string;
    public isResolved: boolean;

    constructor() {
        this.isResolved = false;
    }
}

export = Entity;
