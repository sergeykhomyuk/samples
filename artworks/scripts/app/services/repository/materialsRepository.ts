import Assert = require('../../framework/assert');
import Material = require('../../models/material');
import Entity = require('../../models/entity');
import BaseRepository = require('./baseRepository');
import ICollectionData = require('../../models/data/ICollectionData');
import IHeaders = require('../../models/data/IHeaders');
import IConfig = require('../../IConfig');
import IMaterialsRepository = require('./IMaterialsRepository');

'use strict';

class MaterialsRepository extends BaseRepository<Material> implements IMaterialsRepository {
    public static $inject: string[] = ['$resource', '$q', '$http', 'config'];

    /**
     * Materials repository.
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
            transformResponse: $http.defaults.transformResponse.concat((data: ICollectionData) => {
                var entities: Material[] = this.mapUrlsToMaterials(data.urls);
                return entities;
            })
        };

        var saveAction: ng.resource.IActionDescriptor = {
            method: 'POST',
            transformResponse: $http.defaults.transformResponse.concat(
                (data: Entity, headers: () => IHeaders) => {
                    var url: string = headers().location;

                    var id: number = this.parseIdFromUrl(url);
                    data.id = id;
                    data.url = url;
                    return data;
                }
            )
        };

        var resource = $resource<Material>(config.urls.materials +'/:id', null, {
            save: saveAction,
            query: queryAction
        });

        super($q, resource);
    }


    /** 
     * Map materials urls to entities.
     * @param {array} url - Materials urls.
     * @returns {array} Materials.
     */
    private mapUrlsToMaterials(urls: string[]): Material[] {
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

export = MaterialsRepository;
