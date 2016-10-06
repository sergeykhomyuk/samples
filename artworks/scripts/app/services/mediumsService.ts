import IRepository = require('./repository/IRepository');
import Medium = require('../models/medium');
import CollectionService = require('./collectionService');
import Assert = require('../framework/assert');
import IConfig = require('../IConfig');

'use strict';

class MediumsService extends CollectionService<Medium> {
    public static $inject: string[] = ['$q', 'mediumsRepository', 'config'];

    /**
     * Mediums collection service
     * @param {object} $q - Q service.
     * @param {object} repository - Mediums repository.
     * @param {object} config - Config.
     * @constructor
     */
    constructor($q: ng.IQService, repository: IRepository<Medium>, config: IConfig) {
        Assert.isNotNull($q, '$q');
        Assert.isNotNull(repository, 'repository');
        Assert.isNotNull(config, 'config');

        super($q, repository, config.cache.mediumCacheKeyFormat);
    }
}

export = MediumsService;
