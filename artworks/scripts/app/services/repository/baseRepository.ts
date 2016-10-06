import Assert = require('../../framework/assert');
import Entity = require('../../models/entity');
import IRepository = require('./IRepository');
import IHeaders = require('../../models/data/IHeaders');

'use strict';

class BaseRepository<TEntity extends Entity> implements IRepository<TEntity> {
    public resource: ng.resource.IResourceClass<TEntity>;
    public $q: ng.IQService;
    
    /**
     * Base entity repository.
     * @param {object} $q - Q service.
     * @param {object} resource - Entity resource class.
     * @constructor
     */
    constructor($q: ng.IQService, resource: ng.resource.IResourceClass<TEntity>) {
        Assert.isNotNull($q, '$q');
        Assert.isNotNull(resource, 'resource');

        this.$q = $q;
        this.resource = resource;
    }


    /** 
     * Select entity by ID.
     * @param {number} id - Entity ID.
     * @returns {promise} Promise for entity.
     */
    public selectById(id: number): ng.IPromise<TEntity> {
        Assert.isNotNull(id, 'id');

        var deferred: ng.IDeferred<TEntity> = this.$q.defer();

        this.resource.get({ id: id }, (entity: TEntity) => {
            if (!entity) {
                deferred.reject();
                return;
            }

            entity.isResolved = true;
            deferred.resolve(entity);
        }, () => {
            deferred.reject();
        });
        
        return deferred.promise;
    }

    /** 
     * Select all entities.
     * @returns {promise} Promise for entities.
     */
    public selectAll(): ng.IPromise<TEntity[]> {
        var deferred: ng.IDeferred<TEntity[]> = this.$q.defer();

        this.resource.query((entities: TEntity[]) => {
            if (!entities) {
                deferred.reject();
                return;
            }

            deferred.resolve(entities);
        }, () => {
            deferred.reject();
        });
        
        return deferred.promise;
    }


    /** 
     * Create new entity.
     * @param {object} entity - Entity template.
     * @returns {promise} Promise for entity.
     */
    public create(entity: TEntity): ng.IPromise<TEntity> {
        Assert.isNotNull(entity, 'entity');

        var deferred: ng.IDeferred<TEntity> = this.$q.defer();

        this.resource.save(entity, (result: Entity) => {
            if (!result) {
                deferred.reject();
                return;
            }

            entity.id = result.id;
            entity.url = result.url;
            entity.isResolved = true;

            deferred.resolve(entity);
        }, () => {
            deferred.reject();
        });

        return deferred.promise;
    }


    /** 
     * Update entity.
     * @param {object} entity - Entity to update.
     * @returns {promise} Promise for entity.
     */
    public update(entity: TEntity): ng.IPromise<TEntity> {
        Assert.isNotNull(entity, 'entity');

        var deferred: ng.IDeferred<TEntity> = this.$q.defer();

        this.resource.update(entity, () => {
            deferred.resolve(entity);
        }, () => {
            deferred.reject();
        });

        return deferred.promise;
    }

    /** 
     * Remove entity.
     * @param {object} entity - Entity to remove.
     * @returns {promise} Promise for deletion.
     */
    public remove(entity: TEntity): ng.IPromise<void> {
        Assert.isNotNull(entity, 'entity');

        var deferred: ng.IDeferred<any> = this.$q.defer();

        this.resource.delete({id: entity.id}, () => {
            deferred.resolve();
        }, () => {
            deferred.reject();
        });

        return deferred.promise;
    }


    /** 
     * Parse url and get entity ID.
     * @param {string} Url - Entity url.
     * @returns {number} Entity ID.
     */
    public parseIdFromUrl(url: string): number {
        Assert.isNotNull(url, 'url');

        var idValue: string = url.substring(url.lastIndexOf('/') + 1);
        var id: number = parseInt(idValue);

        return id;
    }
}

export = BaseRepository;
