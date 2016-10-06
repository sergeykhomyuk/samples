import IMediumControllerScope = require('./IMediumControllerScope');
import ICollectionService = require('../services/ICollectionService');
import Medium = require('../models/medium');
import _ = require('underscore');
import Assert = require('../framework/assert');

'use strict';

class MediumController {
    private $scope: IMediumControllerScope;
    private mediumsService: ICollectionService<Medium>;

    public static $inject: string[] = ['$scope', 'mediumsService'];


    /**
     * Medium controller
     * @param {object} $scope - Medium controller scope. 
     * @param {object} mediumsService - Mediums service.
     * @constructor
     */
    constructor($scope: IMediumControllerScope, mediumsService: ICollectionService<Medium>) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(mediumsService, 'mediumsService');

        this.$scope = $scope;
        this.mediumsService = mediumsService;

        this.$scope.state = {
             isLoading: true
        };
        
        this.$scope.mediums = [];

        this.$scope.$watch('medium.id', () => {
            if (this.$scope.medium.isResolved) {
                this.$scope.onChanged({ medium: this.$scope.medium });
            }
        });

        this.load();
    }

    /** 
     * Load mediums.
     */
    private load(): void {
        this.$scope.state.isLoading = true;
 
        this.mediumsService.loadCollection().then((mediums: Medium[]) => {
            this.$scope.mediums = mediums;
            this.$scope.medium = _.find(mediums, (medium: Medium) => medium.id === this.$scope.medium.id);
            this.$scope.state.isLoading = false;

            this.$scope.onLoaded();
        });
    }
}

export = MediumController;