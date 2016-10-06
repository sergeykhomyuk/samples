import IRepository = require('./repository/IRepository');
import Material = require('../models/material');
import CollectionService = require('./collectionService');
import Assert = require('../framework/assert');
import IConfig = require('../IConfig');

'use strict';

class MaterialsService extends CollectionService<Material> {
    public static $inject: string[] = ['$q', 'materialsRepository', 'config'];

    /**
     * Materials collection service
     * @param {object} $q - Q service.
     * @param {object} repository - Materials repository.
     * @param {object} config - Config.
     * @constructor
     */
    constructor($q: ng.IQService, repository: IRepository<Material>, config: IConfig) {
        Assert.isNotNull($q, '$q');
        Assert.isNotNull(repository, 'repository');
        Assert.isNotNull(config, 'config');

        super($q, repository, config.cache.materialCacheKeyFormat);
    }
}

export = MaterialsService;
