import IItemHeaderControllerScope = require('./IItemHeaderControllerScope');

import IBuildsService = require('../services/IBuildsService');

import ItemType = require('../models/itemType');
import State = require('../models/state');

import Assert = require('../../framework/assert');

'use strict';

/** 
* Item Header controller.
* @class
*/
class ItemHeaderController {
    private $scope: IItemHeaderControllerScope;
    private buildsService: IBuildsService;
    private stateWatcherDestructor: Function;

    public static $inject: string[] = ['$scope', 'buildsService'];

    /**
     * Item Header Controller.
     * @param {object} $scope - Controller scope.
     * @param {object} buildsService - Builds service.
     * @constructor
     */
    constructor($scope: IItemHeaderControllerScope, buildsService: IBuildsService) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(buildsService, 'buildsService');

        this.$scope = $scope;
        this.buildsService = buildsService;

        this.$scope.state = {
            isDisabled: null,
            isFirewall: this.$scope.item.type === ItemType.firewall,
            isBuild: this.$scope.item.type === ItemType.build
        };

        this.updateState();
        
        this.stateWatcherDestructor = this.$scope.$watch('item.state', () => this.updateState());
    }

    /**
     * Update item state. 
     */
    private updateState(): void {
        this.$scope.state.isDisabled = this.buildsService.checkDisabled(this.$scope.item);

        if (!this.$scope.state.isDisabled && !!this.stateWatcherDestructor) {
            this.stateWatcherDestructor();
            this.stateWatcherDestructor = null;
        }
    }
}

export = ItemHeaderController;
