import Assert = require('../../framework/assert');
import Medium = require('../../models/medium');
import BaseRepository = require('./baseRepository');
import ICollectionData = require('../../models/data/ICollectionData');
import IConfig = require('../../IConfig');
import IMediumsRepository = require('./IMediumsRepository');

'use strict';

class MediumsRepository extends BaseRepository<Medium> implements IMediumsRepository {
    public static $inject: string[] = ['$resource', '$q', '$http', 'config'];
    
    /**
     * Mediums repository.
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
                var entities: Medium[] = this.mapUrlsToMediums(data.urls);
                return entities;
            })
        };

        var resource: ng.resource.IResourceClass<Medium> = $resource<Medium>(config.urls.mediums + '/:id', null, {
            query: queryAction
        });

        super($q, resource);        
    }


    /** 
     * Map mediums urls to entities.
     * @param {array} url - Mediums urls.
     * @returns {array} Mediums.
     */
    private mapUrlsToMediums(urls: string[]): Medium[]{
        Assert.isNotNull(urls, 'urls');

        var mediums: Medium[] = _.map(urls, (url: string) => {
            var medium: Medium = new Medium();
            medium.id = this.parseIdFromUrl(url);
            medium.url = url;
            return medium;
        });

        return mediums;
    }
}

export = MediumsRepository;
