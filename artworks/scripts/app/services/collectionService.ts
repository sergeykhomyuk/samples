import IRepository = require('./repository/IRepository');
import Entity = require('../models/entity');
import _ = require('underscore');
import amplify = require('amplify');
import Assert = require('../framework/assert');

'use strict';

class CollectionService<TEntity extends Entity> {
    private repository: IRepository<TEntity>;
    private $q: ng.IQService;
    private loadCollectionDeffered: ng.IDeferred<TEntity[]>;
    private cacheKeyFormat: string;

    /**
     * Collection service
     * @param {object} $q - Q service.
     * @param {object} repository - Entity repository.
     * @param {string} cacheKeyFormat - Entity local cache key format.
     * @constructor
     */
    constructor($q: ng.IQService, repository: IRepository<TEntity>, cacheKeyFormat: string) {
        Assert.isNotNull($q, '$q');
        Assert.isNotNull(repository, 'repository');
        Assert.isNotNull(cacheKeyFormat, 'cacheKeyFormat');

        this.$q = $q;
        this.repository = repository;
        this.cacheKeyFormat = cacheKeyFormat;
    }

    /** 
     * Load entities collection and store it in local cache.
     */
    public loadCollection(): ng.IPromise<TEntity[]> {
        if (!this.loadCollectionDeffered) {
            this.loadCollectionDeffered = this.$q.defer();

            this.repository.selectAll().then((entities: TEntity[]) => {
                var promises: ng.IPromise<TEntity>[] = _.map(entities, (entity: TEntity) => this.loadEntity(entity));

                this.$q.all(promises).then((result: TEntity[]) => {
                    this.loadCollectionDeffered.resolve(result);
                });
            });
        }

        return this.loadCollectionDeffered.promise;
    }


    /** 
     * Load entity.
     * @param {object} entity - Entity.
     */
    private loadEntity(entity: TEntity): ng.IPromise<TEntity> {
        Assert.isNotNull(entity, 'entity');

        var promise: ng.IPromise<TEntity>;

        var cacheKey: string = this.cacheKeyFormat.format(entity.id);
        var cachedEntity: Entity = amplify.store(cacheKey);

        if (!!cachedEntity) {
            promise = this.$q.when(cachedEntity);
        } else {
            promise = this.repository.selectById(entity.id);
            promise.then((resolvedEntity: TEntity) => {
                amplify.store(cacheKey, resolvedEntity);
            });
        }

        return promise;
    }
}

export = CollectionService;