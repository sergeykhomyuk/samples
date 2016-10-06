import IBuildsWatcherService = require('./IBuildsWatcherService');
import IConfig = require('../IConfig');
import IBuildsApiService = require('./IBuildsApiService');
import IBuildsWatcher = require('./IBuildsWatcher');

import BuildsWatcher = require('./buildsWatcher');
import Item = require('../models/item');

import Assert = require('../../framework/assert');

'use strict';

/** 
* Builds watcher service.
* @class
*/
class BuildsWatcherService implements IBuildsWatcherService {
    private $interval: ng.IIntervalService;
    private apiService: IBuildsApiService;
    private config: IConfig;

    public static $inject: string[] = ['$interval', 'buildsApiService', 'config'];

    /**
     * Builds watcher service.
     * @param {object} $interval - Interval service.
     * @param {object} apiService - Builds API Service.
     * @param {object} config - config.
     * @constructor
     */
    constructor($interval: ng.IIntervalService, apiService: IBuildsApiService, config: IConfig) {
        Assert.isNotNull($interval, '$interval');
        Assert.isNotNull(apiService, 'apiService');
        Assert.isNotNull(config, 'config');

        this.$interval = $interval;
        this.apiService = apiService;
        this.config = config;
    }

    /** 
    * Start watching for items.
    * @param {function} callback - Items updated callback.
    * @returns {object} builds watcher.
    */
    public watch(callback: (items: Item[]) => void): IBuildsWatcher {
        Assert.isNotNull(callback, 'callback');

        var buildsWatcher: BuildsWatcher = new BuildsWatcher(this.$interval, this.apiService, this.config.checkInterval);
        buildsWatcher.watch(callback);

        return buildsWatcher;
    }
}

export = BuildsWatcherService;
