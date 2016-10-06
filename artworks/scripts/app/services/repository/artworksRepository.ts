import Assert = require('../../framework/assert');
import Artwork = require('../../models/artwork');
import Dimension = require('../../models/dimension');
import Medium = require('../../models/medium');
import Material = require('../../models/material');
import EntityCollection = require('../../models/entityCollection');
import Units = require('../../models/units');
import IArtkworkData = require('../../models/data/IArtkworkData');
import ICollectionData = require('../../models/data/ICollectionData');
import IHeaders = require('../../models/data/IHeaders');
import BaseRepository = require('./baseRepository');
import IConfig = require('../../IConfig');
import ObjectUtils = require('../../framework/objectUtils');
import IArtworksRepository = require('./IArtworksRepository');

import _ = require('underscore');

'use strict';

class ArtworksRepository extends BaseRepository<Artwork> implements IArtworksRepository {
    private config: IConfig;

    public static $inject: string[] = ['$resource', '$q', '$http', 'config'];

    /**
     * Artworks repository.
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
        
        this.config = config;


        var queryAction: ng.resource.IActionDescriptor = {
            method: 'GET',
            isArray: true,
            transformResponse: $http.defaults.transformResponse.concat((data: ICollectionData) => {
                var entities: Artwork[] = this.mapUrlsToArtworks(data.urls);
                return entities;
            })
        };

        var updateAction: ng.resource.IActionDescriptor = {
            method: 'PUT',
            transformRequest: [
                (entity: Artwork) => {
                    var data: IArtkworkData = this.mapArtworkToData(entity);
                    return data;
                }
            ].concat($http.defaults.transformRequest)
        };
        
        var getAction: ng.resource.IActionDescriptor = {
            method: 'GET',
            transformResponse: $http.defaults.transformResponse.concat(
            (data: IArtkworkData) => {
                var entity: Artwork = this.mapDataToArtwork(data);
                return entity;
            })
        };

        var saveAction: ng.resource.IActionDescriptor = {
            method: 'POST',
            transformRequest: [
                (entity: Artwork) => {
                    var data: IArtkworkData = this.mapArtworkToData(entity);
                    return data;
                }
            ].concat($http.defaults.transformRequest),
            transformResponse:
                $http.defaults.transformResponse.concat(
                    (data: IArtkworkData, headers: () => IHeaders) => {
                        var url: string = headers().location;

                        var id: number = this.parseIdFromUrl(url);
                        data.id = id;
                        data.url = url;
                        data.materials = this.config.urls.artworkMediums.format(id);

                        return data;
                    }
                )
        };

        var resource: ng.resource.IResourceClass<Artwork> = $resource<Artwork>(config.urls.artworks + '/:id', { id: '@id' }, {
            get: getAction,
            save: saveAction,
            update: updateAction,
            query: queryAction
        });

        super($q, resource);
    }


    /** 
     * Create new entity.
     * @param {object} entity - Entity template.
     * @returns {promise} Promise for entity.
     * @override
     */
    public create(entity: Artwork): ng.IPromise<Artwork> {
        Assert.isNotNull(entity, 'entity');

        var deferred: ng.IDeferred<Artwork> = this.$q.defer();

        this.resource.save(entity, (result: IArtkworkData) => {
            if (!result) {
                deferred.reject();
                return;
            }

            var artwork: Artwork = this.mapDataToArtwork(result);
            artwork.isResolved = true;

            ObjectUtils.extendRecurcive(entity, artwork);
           
            deferred.resolve(entity);
        }, () => {
            deferred.reject();
        });

        return deferred.promise;
    }
    

    /** 
     * Map artworks urls to entities.
     * @param {array} url - Artwork urls.
     * @returns {array} Artworks.
     */
    private mapUrlsToArtworks(urls: string[]): Artwork[]{
        Assert.isNotNull(urls, 'urls');

        var arkworks: Artwork[] = _.map(urls, (url: string) => {
            var item: IArtkworkData = {
                id: this.parseIdFromUrl(url),
                url: url
            };

            var artwork = this.mapDataToArtwork(item);
            return artwork;
        });

        return arkworks;
    }


    /** 
     * Map data to entity.
     * @param {object} data - Data object.
     * @returns {object} Entity.
     */
    private mapDataToArtwork<TData>(data: IArtkworkData): Artwork {
        Assert.isNotNull(data, 'data');

        var entity: Artwork = new Artwork();
        entity.id = data.id;
        entity.url = data.url;
        entity.description = data.description;
        entity.title = data.title;
        entity.artist = data.artist;
        entity.year = data.year;
        entity.price = data.price;
        entity.isIncludesVat = !_.isUndefined(data.includes_vat) ? data.includes_vat : false;
        entity.vat = data.vat;
        entity.unit = data.dimensions_in_cm ? Units.cm : Units.inches;

        entity.dimension = new Dimension();
        entity.dimension.width = data.dimension1;
        entity.dimension.height = data.dimension2;
        entity.dimension.depth = data.dimension3;

        entity.medium = new Medium();
        if (!!data.medium) {
            entity.medium.id = this.parseIdFromUrl(data.medium);
            entity.medium.url = data.medium;
        }
        entity.materials = new EntityCollection<Material>();
        entity.materials.parentId = data.id;
        entity.materials.url = data.materials;

        
        return entity;
    }
    
    /** 
     * Map entity to data.
     * @param {object} entity - Entity.
     * @returns {object} Data object.
     */
    private mapArtworkToData(entity: Artwork): IArtkworkData {
        Assert.isNotNull(entity, 'entity');

        var data: IArtkworkData = {
            artist: entity.artist || '',
            description: entity.description || '',            
            dimension1: (entity.dimension && entity.dimension.width) || 0,
            dimension2: (entity.dimension && entity.dimension.height) || 0,
            dimension3: (entity.dimension && entity.dimension.depth) || 0,
            dimensions_in_cm: entity.unit === Units.cm,
            id: entity.id,
            includes_vat: !_.isUndefined(entity.isIncludesVat) ? entity.isIncludesVat : false,
            materials: entity.materials && entity.materials.url || '',
            medium: entity.medium && entity.medium.url || '',
            price: entity.price || 0,
            title: entity.title || '',
            url: entity.url,
            vat: entity.vat || 0,
            year: entity.year || 0
        };

        return data;
    }

}

export = ArtworksRepository;
