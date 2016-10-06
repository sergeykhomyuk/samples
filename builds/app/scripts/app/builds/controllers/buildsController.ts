import IBuildsControllerScope = require('./IBuildsControllerScope');
import IBuildsWatcherService = require('../services/IBuildsWatcherService');
import IBuildsWatcher = require('../services/IBuildsWatcher');

import Item = require('../models/item');

import Assert = require('../../framework/assert');

'use strict';

/**
 * Builds controller.
 * @class
 */
class BuildsController {
    private $scope: IBuildsControllerScope;
    private buildsWatcherService: IBuildsWatcherService;
    private buildsWatcher: IBuildsWatcher;

    public static $inject: string[] = ['$scope', 'buildsWatcherService', 'items'];

    /**
     * Builds controller.
     * @param {object} $scope - Controller scope.
     * @param {object} buildsWatcherService - Builds watcher service.
     * @param {array} items - Build items.
     * @constructor
     */
    constructor($scope: IBuildsControllerScope, buildsWatcherService: IBuildsWatcherService, items: Item[]) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(buildsWatcherService, 'buildsWatcherService');
        Assert.isNotNull(items, 'items');

        this.$scope = $scope;
        this.buildsWatcherService = buildsWatcherService;

        this.$scope.items = items;

        this.buildsWatcher = this.buildsWatcherService.watch((updatedItems: Item[]) => this.onItemsUpdated(updatedItems));

        this.$scope.$on('$destroy', () => this.onDestroy());
    }

    /** 
    * Items updated handler.
    * @param {array} items - Items.
    */
    private onItemsUpdated(items: Item[]): void {
        this.$scope.items = items;
    }

    /** 
    * Controller scope destroy handler.
    */
    private onDestroy(): void {
        if (!!this.buildsWatcher) {
            this.buildsWatcher.dispose();
            this.buildsWatcher = null;
        }
    }
}

export = BuildsController;