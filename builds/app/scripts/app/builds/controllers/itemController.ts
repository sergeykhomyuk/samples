import IItemControllerScope = require('./IItemControllerScope');

import IssueController = require('./issueController');
import INotificationsService = require('../services/INotificationsService');
import IBuildsApiService = require('../services/IBuildsApiService');
import IBuildsService = require('../services/IBuildsService');

import Item = require('../models/item');
import State = require('../models/state');
import DeployTarget = require('../models/deployTarget');

import Assert = require('../../framework/assert');

'use strict';

/** 
* Item Controller.
* @class
*/
class ItemController {
    private $scope: IItemControllerScope;
    private $modal: ng.ui.bootstrap.IModalService;
    private notificationsService: INotificationsService;
    private apiService: IBuildsApiService;
    private buildsService: IBuildsService;
    private stateWatcherDestructor: Function;
    
    public static $inject: string[] = ['$scope', '$modal', 'notificationsService', 'buildsApiService', 'buildsService'];

    /**
     * Item Controller.
     * @param {object} $scope - Controller scope.
     * @param {object} $modal - Modal service.
     * @param {object} notificationsService - Notifications service.
     * @param {object} apiService - Builds API service.
     * @param {object} buildsService - Builds service.
     * @constructor
     */
    constructor($scope: IItemControllerScope, $modal: ng.ui.bootstrap.IModalService, notificationsService: INotificationsService,
        apiService: IBuildsApiService, buildsService: IBuildsService) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull($modal, '$modal');
        Assert.isNotNull(notificationsService, 'notificationsService');
        Assert.isNotNull(apiService, 'apiService');
        Assert.isNotNull(buildsService, 'buildsService');

        this.$scope = $scope;
        this.$modal = $modal;
        this.notificationsService = notificationsService;
        this.apiService = apiService;
        this.buildsService = buildsService;

        this.$scope.state = {
            isExpanded: false,
            isDisabled: null,
            isSucceeded: null,
            isFailed: null,
            isPending: null,
            isRunning: null
        };

        this.updateState();
        
        this.$scope.findIssues = () => this.findIssues();
        this.$scope.findMergedBuild = () => this.findMergedBuild();
        this.$scope.deployBuild = (target: DeployTarget) => this.deployBuild(target);

        this.stateWatcherDestructor = this.$scope.$watch('item.state', () => this.updateState());
    }

    /**
     * Update item state. 
     */
    private updateState(): void {
        var item: Item = this.$scope.item;

        this.$scope.state.isDisabled = this.buildsService.checkDisabled(item);
        this.$scope.state.isSucceeded = item.state === State.succeeded;
        this.$scope.state.isFailed = item.state === State.failed;
        this.$scope.state.isPending = item.state === State.pending;
        this.$scope.state.isRunning = item.state === State.running;

        if (!this.$scope.state.isDisabled && !!this.stateWatcherDestructor) {
            this.stateWatcherDestructor();
            this.stateWatcherDestructor = null;
        }
    }

    /** 
    * Find item issues.
    */
    public findIssues(): void {
        var item: Item = this.$scope.item;
        this.$modal.open({
            templateUrl: '/templates/builds/issue/issue.tmpl',
            controller: IssueController,
            resolve: {
                item: () => item
            }
        });
    }

    /** 
    * Find merged build.
    */
    public findMergedBuild(): void {
        this.notificationsService.error('Not implemented', 'Find merged build wasn\'t implemented');
    }

    /** 
    * Deploy build.
    * @param {object} target - Deploy target.
    */
    public deployBuild(target: DeployTarget): void {
        Assert.isNotNull(target, 'target');

        this.notificationsService.success('Deployed!', 'Build "{0}" was successfully deployed to {1}'.format(this.$scope.item.name, target.name));
    }    
}

export = ItemController;