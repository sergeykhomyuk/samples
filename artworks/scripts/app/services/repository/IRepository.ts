import Entity = require('../../models/entity');

interface IRepository<TEntity extends Entity> {
    selectById(id: number): ng.IPromise<TEntity>;
    selectAll(): ng.IPromise<TEntity[]>;
    create(entity: TEntity): ng.IPromise<TEntity>;
    update(entity: TEntity): ng.IPromise<TEntity>;
    remove(entity: TEntity): ng.IPromise<void>;

    parseIdFromUrl(url: string): number;
}

export = IRepository;