import Artwork = require('../models/artwork');
import Medium = require('../models/medium');
import Material = require('../models/material');
import Units = require('../models/units');
import Option = require('../models/option');
import IRepository = require('../services/repository/IRepository');
import IArtworkControllerScope = require('./IArtworkControllerScope');
import ObjectUtils = require('../framework/objectUtils');
import IConfig = require('../IConfig');
import _ = require('underscore');
import Assert = require('../framework/assert');

'use strict';

class ArtworkController {
    private $scope: IArtworkControllerScope;
    private config: IConfig;
    private artworkRepository: IRepository<Artwork>;
    private $modal: ng.ui.bootstrap.IModalService;

    public static $inject: string[] = ['$scope', 'config', 'artworksRepository', '$modal'];

    /**
     * Artwork controller
     * @param {object} $scope - Artwork controller scope.
     * @param {object} config - Config.
     * @param {object} artworksRepository - Artworks repository.
     * @param {object} $modal - Modal service.
     * @constructor
     */
    constructor($scope: IArtworkControllerScope, config: IConfig, artworksRepository: IRepository<Artwork>, $modal: ng.ui.bootstrap.IModalService) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(config, 'config');
        Assert.isNotNull(artworksRepository, 'artworksRepository');
        Assert.isNotNull($modal, '$modal');
        
        this.$scope = $scope;
        this.config = config;
        this.artworkRepository = artworksRepository;
        this.$modal = $modal;

        this.$scope.state = {
            isLoading: false,
            showDescription: false,            
            isMediumLoading: true,
            isMaterialsLoading: true
        };

        this.$scope.config = {
            modelOptions: config.modelOptions
        };

        this.$scope.units = [new Option<number>(Units.cm, 'cm'), new Option<number>(Units.inches, 'inches')];

        this.$scope.remove = () => this.remove();
        this.$scope.toggleDescription = () => this.toggleDescription();

        this.$scope.artworkChanged = (artwork: Artwork) => this.artworkChanged(artwork);
        this.$scope.changeMedium = (medium: Medium) => this.onMediumChanged(medium);

        $scope.materialsLoaded = () => {
            this.$scope.state.isMaterialsLoading = false;
        };

        $scope.mediumsLoaded = () => {
            this.$scope.state.isMediumLoading = false;
        };

        this.load();
    }


    /** 
     * Toggle artwork description visibility.
     */
    public toggleDescription(): void {
        this.$scope.state.showDescription = !this.$scope.state.showDescription;
    }


    /** 
     * Remove artwork.
     */
    public remove(): void {
        var modalInstance: ng.ui.bootstrap.IModalServiceInstance = this.$modal.open({
            templateUrl: '/templates/artwork/delete.tmpl',
            windowClass: 'modal-alert modal-warning'
        });

        modalInstance.result.then(() => {
            this.artworkRepository.remove(this.$scope.artwork);
            this.$scope.onRemoved();
        });
    }


    /** 
     * Artwork changed handler.
     * @param {object} artwork - Artwork.
     */
    public artworkChanged(artwork: Artwork): void {
        Assert.isNotNull(artwork, 'artwork');

        this.artworkRepository.update(this.$scope.artwork).then(() => {
            this.$scope.artworkForm.$setPristine();
        });
    }


    /** 
     * Artwork medium changed handler.
     * @param {object} medium - Medium.
     */
    public onMediumChanged(medium: Medium): void {
        Assert.isNotNull(medium, 'medium');

        this.$scope.artwork.medium = medium;
        this.artworkChanged(this.$scope.artwork);
    }


    /** 
     * Load artwork.
     */
    private load(): void {
        if (this.$scope.artwork.isResolved)
            return;

        this.$scope.state.isLoading = true;

        this.artworkRepository.selectById(this.$scope.artwork.id).then((artwork: Artwork) => {
            ObjectUtils.extendRecurcive(this.$scope.artwork, artwork);

            artwork.isResolved = true;
            this.$scope.state.isLoading = false;
        });
    }
}

export = ArtworkController;