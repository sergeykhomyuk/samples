import IBuildsApiService = require('./IBuildsApiService');
import IConfig = require('../IConfig');

import Item = require('../models/item');
import Issue = require('../models/issue/issue');
import DateUtils = require('../../framework/dateUtils');

import Assert = require('../../framework/assert');

import _ = require('underscore');

'use strict';

/** 
* Builds API Service.
* @class
*/
class BuildsApiService implements IBuildsApiService {
    private $q: ng.IQService;
    private $http: ng.IHttpService;
    private config: IConfig

    public static $inject: string[] = ['$q', '$http', 'config'];

    /**
     * Builds API Service.
     * @param {object} $q - Q service.
     * @param {object} $http - Http service.
     * @param {object} config - Config.
     * @constructor
     */
    constructor($q: ng.IQService, $http: ng.IHttpService, config: IConfig) {
        Assert.isNotNull($q, '$q');
        Assert.isNotNull($http, '$http');
        Assert.isNotNull(config, 'config');

        this.$q = $q;
        this.$http = $http;
        this.config = config;
    }

    /** 
    * Get items.
    * @returns {array} items.
    */
    public getItems(): ng.IPromise<Item[]> {
        var deferred: ng.IDeferred<Item[]> = this.$q.defer();

        this.$http.get(this.config.urls.api.getItems)
            .success((items: Item[]) => {
                Assert.isNotNull(items, 'items');

                var mappedItems: Item[] = this.mapItems(items);

                deferred.resolve(mappedItems);
            }).error((response: any) => {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    /** 
    * Find item issue.
    * @param {number} itemId - Item ID.
    * @returns {object} promise for issue.
    */
    public findIssue(itemId: number): ng.IPromise<Issue> {
        Assert.isNotNull(itemId, 'itemId');

        var deferred: ng.IDeferred<Issue> = this.$q.defer();

        var config: ng.IRequestShortcutConfig = {
            data: {
                id: itemId
            }
        };

        this.$http.get(this.config.urls.api.findIssue, config)
            .success((issue: Issue) => {
                Assert.isNotNull(issue, 'issue');

                deferred.resolve(issue);
            }).error((response: any) => {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    /** 
    * Map items to model.
    * @param {array} items - Items.
    * @returns {array} mapped items.
    */
    private mapItems(items: Item[]): Item[] {
        var mappedItems: Item[] = _.map(items, (item: Item) => {

            item.timeStarted = DateUtils.mapJsonDate(item.timeStarted);
            item.createDate = DateUtils.mapJsonDate(item.createDate);

            return item;
        });

        return mappedItems;
    }
}

export = BuildsApiService;