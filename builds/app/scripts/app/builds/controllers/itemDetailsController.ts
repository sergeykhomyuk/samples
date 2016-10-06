import IItemDetailsControllerScope = require('./IItemDetailsControllerScope');
import INotificationsService = require('../services/INotificationsService');

import DeployTarget = require('../models/deployTarget');

import Assert = require('../../framework/assert');


'use strict';

/** 
* Item Details controller.
* @class
*/
class ItemDetailsController {
    private $scope: IItemDetailsControllerScope;
    private notificationsService: INotificationsService;

    public static $inject: string[] = ['$scope', 'notificationsService'];

    /**
     * Item Details controller.
     * @param {object} $scope - Controller scope.
     * @param {object} notificationsService - Notifications service.
     * @constructor
     */
    constructor($scope: IItemDetailsControllerScope, notificationsService: INotificationsService) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(notificationsService, 'notificationsService');

        this.$scope = $scope;
        this.notificationsService = notificationsService;

        this.$scope.expandBuild = () => this.expandBuild();
        this.$scope.expandMetrics = () => this.expandMetrics();
        this.$scope.expandUnitTest = () => this.expandUnitTest();
        this.$scope.expandFunctionalTest = () => this.expandFunctionalTest();

        this.$scope.findIssues = () => this.findIssues();
        this.$scope.deployBuild = (target: DeployTarget) => this.deployBuild(target);
        this.$scope.findMergedBuild = () => this.findMergedBuild();
    }

    /** 
    * Expand build details.
    */
    private expandBuild(): void {
        this.notificationsService.error('Not implemented', 'Build details wasn\'t implemented');
    }

   /** 
    * Expand metrics details.
    */
    private expandMetrics(): void {
        this.notificationsService.error('Not implemented', 'Metrics details wasn\'t implemented');
    }

   /** 
    * Expand unit test details.
    */
    private expandUnitTest(): void {
        this.notificationsService.error('Not implemented', 'Unit test details wasn\'t implemented');
    }

   /** 
    * Expand functional test details.
    */
    private expandFunctionalTest(): void {
        this.notificationsService.error('Not implemented', 'Functional test details wasn\'t implemented');
    }

   /** 
    * Find merged build.
    */
    private findMergedBuild(): void {
        this.$scope.onFindMergedBuild();
    }

    /** 
    * Deploy build.
    * @param {object} target - Deploy target.
    */
    private deployBuild(target: DeployTarget): void {
        Assert.isNotNull(target, 'target');

        this.$scope.onDeployBuild({ target: target });
    }

    /** 
    * Find item issues.
    */
    private findIssues(): void {
        this.$scope.onFindIssues();
    }
}

export = ItemDetailsController;
