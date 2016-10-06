import IConfig = require('./IConfig');

'use strict';

var baseUrl: string = 'http://54.77.217.175';

var config: IConfig = {
    urls: {
        artworks: baseUrl + '/artworks',
        materials: baseUrl + '/materials',
        mediums: baseUrl + '/mediums',
        artworkMediums: baseUrl + '/artworks/{0}/materials'
    },
    defaults: {
        medium: 1 // Paintings
    },
    modelOptions: {
        updateOn: 'default blur',
        debounce: {
            'default': 1000,
            'blur': 0
        }
    },
    cache: {
        mediumCacheKeyFormat: 'medium/{0}',
        materialCacheKeyFormat: 'material/{0}'
    }
};

export = config;