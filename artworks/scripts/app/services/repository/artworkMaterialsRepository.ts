import Assert = require('../../framework/assert');
import Material = require('../../models/material');
import BaseRepository = require('./baseRepository');
import IArtworkMaterialsRepository = require('./IArtworkMaterialsRepository');
import ICollectionData = require('../../models/data/ICollectionData');
import EntityCollection = require('../../models/entityCollection');
import IConfig = require('../../IConfig');

import _ = require('underscore');

'use strict';

class ArtworksMaterialsRepository extends BaseRepository<Material> implements IArtworkMaterialsRepository {

    public static $inject: string[] = ['$resource', '$q', '$http', 'config'];

    /**
     * Artworks materials repository.
     * @param {object} $resource - Resource service.
     * @param {object} $q - Q service.
     * @param {object} config - Config.
     * @constructor
     */
    constructor($resource: ng.resource.IResourceService, $q: ng.IQService, $http: ng.IHttpService, config: IConfig) {
        Assert.isNotNull($resource, '$resource');
        Assert.isNotNull($q, '$q');
        Assert.isNotNull($http, '$http');
        Assert.isNotNull(config, 'config');
        
        var queryAction: ng.resource.IActionDescriptor = {
            method: 'GET',
            isArray: true,
            transformResponse: $http.defaults.transformResponse.concat(
            (data: ICollectionData) => {
                var entities: Material[] = this.mapUrlsToMaterials(data.urls);
                return entities;
            })
        };

        var resource: ng.resource.IResourceClass<Material> = $resource<Material>(config.urls.artworkMediums.format(':id'), {id: '@id'}, {
            query: queryAction
        });

        super($q, resource);        
    }

    /** 
     * Select all entities from collection.
     * @param {object} entityCollection - Entity collection.
     * @returns {promise} Promise for entities.
     */
    public selectItems(entityCollection: EntityCollection<Material>): ng.IPromise<EntityCollection<Material>> {
        var deferred: ng.IDeferred<EntityCollection<Material>> = this.$q.defer();

        this.resource.query({id: entityCollection.parentId}, (materials: Material[]) => {
            if (!materials) {
                deferred.reject();
                return;
            }
            _.each(materials, (material: Material) => {
                entityCollection.items.push(material);
            });

            entityCollection.isResolved = true;

            deferred.resolve(entityCollection);
        }, () => {
            deferred.reject();
        });
        
        return deferred.promise;
    }


    /** 
     * Add material to artwork.
     * @param {number} artworkId - Artwork ID.
     * @param {object} material - Material.
     * @returns {promise} Promise for operation.
     */
    public addMaterialToArtwork(artworkId: number, material: Material): ng.IPromise<Material> {
        Assert.isNotNull(artworkId, 'artworkId');
        Assert.isNotNull(material, 'material');

        var deferred: ng.IDeferred<Material> = this.$q.defer();
        this.resource.save({id: artworkId, url: material.url}, () => {
            deferred.resolve(material);
        }, () => {
            deferred.reject();
        });

        return deferred.promise;
    }


    /** 
     * Remove material from artwork.
     * @param {number} artworkId - Artwork ID.
     * @param {object} material - Material.
     * @returns {promise} Promise for operation.
     */
    public removeMaterialFromArtWork(artworkId: number, material: Material): ng.IPromise<Material> {
        Assert.isNotNull(artworkId, 'artworkId');
        Assert.isNotNull(material, 'material');

        var deferred: ng.IDeferred<Material> = this.$q.defer();
        this.resource.delete({id: artworkId, url: material.url}, () => {
            deferred.resolve(material);
        }, () => {
            deferred.reject();
        });

        return deferred.promise;
    }


    /** 
     * Map materials urls to entities.
     * @param {array} url - Materials urls.
     * @returns {array} Materials.
     */
    private mapUrlsToMaterials(urls: string[]): Material[]{
        Assert.isNotNull(urls, 'urls');

        var materials: Material[] = _.map(urls, (url: string) => {
            var material: Material = new Material();
            material.id = this.parseIdFromUrl(url);
            material.url = url;
            return material;
        });

        return materials;
    }
}

export = ArtworksMaterialsRepository;
