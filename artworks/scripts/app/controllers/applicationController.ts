import IApplicationControllerScope = require('./IApplicationControllerScope');
import IRepository = require('../services/repository/IRepository');
import Artwork = require('../models/artwork');
import Medium = require('../models/medium');
import ArrayUtils = require('../framework/arrayUtils');
import IConfig = require('../IConfig');
import Assert = require('../framework/assert');

'use strict';

class ApplicationController {
    private $scope: IApplicationControllerScope;
    private artworksRepository: IRepository<Artwork>;
    private config: IConfig;
    
    public static $inject: string[] = ['$scope', 'artworksRepository',  'config'];

    /** 
     * Application controller
     * @param {object} $scope - Application controller scope.
     * @param {object} artworksRepository - Artworks repository.
     * @param {object} config - Config. 
     * @constructor
     */
    constructor($scope: IApplicationControllerScope, artworksRepository: IRepository<Artwork>, config: IConfig) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(artworksRepository, 'artworksRepository');
        Assert.isNotNull(config, 'config');

        this.$scope = $scope;
        this.artworksRepository = artworksRepository;
        this.config = config;

        this.$scope.state = {
            isLoading: true,
            isCreating: false
        };

        this.$scope.filters = {
            artist: ''
        };

        this.$scope.createArtwork = () => this.createArtwork();
        this.$scope.removeArtwork = (artwork: Artwork) => this.removeArtwork(artwork);
        
        this.load();
    }

    /** 
     * Create new artwork.
     */
    public createArtwork(): void {
        this.$scope.state.isCreating = true;

        var artworkTemplate: Artwork = new Artwork();
        artworkTemplate.medium = new Medium();
        artworkTemplate.medium.id = this.config.defaults.medium;
        artworkTemplate.medium.url = this.config.urls.mediums + '/' + this.config.defaults.medium;

        this.artworksRepository.create(artworkTemplate).then((createdArtwork: Artwork) => {
            this.$scope.artworks.unshift(createdArtwork);
            this.$scope.state.isCreating = false;
        });
    }


    /** 
     * Remove artwork from list.
     * @param {object} artwork - Artwork.
     */
    public removeArtwork(artwork: Artwork): void {
        Assert.isNotNull(artwork, 'artwork');

        ArrayUtils.without(this.$scope.artworks, artwork);
    }

    /** 
     * Load artworks.
     */
    private load(): void {
        this.$scope.state.isLoading = true;

        this.artworksRepository.selectAll().then((artworks: Artwork[]) => {
            this.$scope.artworks = artworks;

            this.$scope.state.isLoading = false;
        });
    }
}

export = ApplicationController;