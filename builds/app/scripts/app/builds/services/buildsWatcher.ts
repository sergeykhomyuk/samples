import IConfig = require('../IConfig');
import IBuildsApiService = require('./IBuildsApiService');
import IBuildsWatcher = require('./IBuildsWatcher');

import Item = require('../models/item');

import Assert = require('../../framework/assert');

'use strict';

/** 
* Builds watcher.
* @class
*/
class BuildsWatcher implements IBuildsWatcher {
    private $interval: ng.IIntervalService;
    private apiService: IBuildsApiService;
    private checkInterval: number;
    private intervalPromise: ng.IPromise<void>;
    private callback: (items: Item[]) => void;

    /**
     * Builds watcher.
     * @param {object} $interval - Interval service.
     * @param {object} apiService - Builds API Service.
     * @param {number} checkInterval - Check items interval.
     * @constructor
     */
    constructor($interval: ng.IIntervalService, apiService: IBuildsApiService, checkInterval: number) {
        Assert.isNotNull($interval, '$interval');
        Assert.isNotNull(apiService, 'apiService');
        Assert.isNotNull(checkInterval, 'checkInterval');

        this.$interval = $interval;
        this.apiService = apiService;
        this.checkInterval = checkInterval;
    }

    /** 
    * Start watching for items.
    * @param {function} callback - Items updated callback.
    */
    public watch(callback: (items: Item[]) => void): void {
        Assert.isNotNull(callback, 'callback');

        this.dispose();

        this.callback = callback;
        this.intervalPromise = this.$interval(() => this.checkForUpdates(), this.checkInterval);
    }

    /** 
    * Dispose watcher.
    */
    public dispose(): void {
        if (!!this.intervalPromise) {
            this.$interval.cancel(this.intervalPromise);
            this.intervalPromise = null;
            this.callback = null;
        }
    }

    /** 
    * Check for items updates.
    */
    private checkForUpdates(): void {
        this.apiService.getItems().then((items: Item[]) => {
            Assert.isNotNull(items, 'items');

            this.callback(items);
        });
    }
}

export = BuildsWatcher;
