import Entity = require('../models/entity');

interface ICollectionService<TEntity extends Entity> {
    loadCollection(): ng.IPromise<TEntity[]>;
}

export = ICollectionService;