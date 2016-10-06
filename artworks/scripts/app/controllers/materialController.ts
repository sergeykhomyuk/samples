import IMaterialControllerScope = require('./IMaterialControllerScope');
import ICollectionService = require('../services/ICollectionService');
import IArtworkMaterialsRepository = require('../services/repository/IArtworkMaterialsRepository');
import IRepository = require('../services/repository/IRepository');
import EntityCollection = require('../models/entityCollection');
import Material = require('../models/material');
import _ = require('underscore');
import ArrayUtils = require('../framework/arrayUtils');
import Assert = require('../framework/assert');

'use strict';

class MaterialController {
    private $q: ng.IQService;
    private $scope: IMaterialControllerScope;
    private materialsRepository: IRepository<Material>;
    private materialsService: ICollectionService<Material>;
    private artworkMaterialsRepository: IArtworkMaterialsRepository;

    public static $inject: string[] = ['$scope', '$q', 'materialsRepository', 'artworkMaterialsRepository', 'materialsService'];

    /**
     * Material controller
     * @param {object} $scope - Material controller scope.
     * @param {object} $q - Q service.
     * @param {object} materialsRepository - Materials repository.
     * @param {object} artworksMaterialsRepository - Artworks materials repository.
     * @param {object} materialsService - Materials service.
     * @constructor
     */
    constructor($scope: IMaterialControllerScope, $q: ng.IQService, materialsRepository: IRepository<Material>, artworkMaterialsRepository: IArtworkMaterialsRepository, materialsService: ICollectionService<Material>) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull($q, '$q');
        Assert.isNotNull(materialsRepository, 'materialsRepository');
        Assert.isNotNull(artworkMaterialsRepository, 'artworkMaterialsRepository');
        Assert.isNotNull(materialsService, 'materialsService');
        
        this.$scope = $scope;
        this.$q = $q;
        this.materialsRepository = materialsRepository;
        this.materialsService = materialsService;
        this.artworkMaterialsRepository = artworkMaterialsRepository;

        this.$scope.state = {
             isLoading: true
        };
        this.$scope.options = null;

        this.$scope.addMaterial = (value: string) => this.addMaterial(value);
        this.$scope.removeMaterial = (value: string) => this.removeMaterial(value);

        this.load();
    }


    /** 
     * Add material.
     * @param {string} material - Material name.
     */
    public addMaterial(value: string): void {
        Assert.isNotNull(value, 'value');

        var material: Material = _.find(this.$scope.options, (option: Material) => option.name === value);

        if (!material) {
            material = new Material();
            material.name = value;
            this.materialsRepository.create(material).then((result: Material) => {
                this.artworkMaterialsRepository.addMaterialToArtwork(this.$scope.materials.parentId, result);
                this.$scope.onAdd({ material: result });
            });
        } else {
            this.artworkMaterialsRepository.addMaterialToArtwork(this.$scope.materials.parentId, material);
            this.$scope.onAdd({ material: material });
        }

        this.$scope.materials.items.push(material);
    }


    /** 
     * Remove material.
     * @param {string} material - Material name.
     */
    public removeMaterial(value: string): void {
        Assert.isNotNull(value, 'value');

         var material: Material = _.find(this.$scope.materials.items, (option: Material) => option.name === value);

        this.artworkMaterialsRepository.removeMaterialFromArtWork(this.$scope.materials.parentId, material).then(() => {
            ArrayUtils.without(this.$scope.materials.items, material);
        });
    }


    /** 
     * Load materials.
     */
    private load(): void {
        this.$scope.state.isLoading = true;

        var selectItemsPromise: ng.IPromise<EntityCollection<Material>> = this.artworkMaterialsRepository.selectItems(this.$scope.materials);
        var loadCollectionPromise: ng.IPromise<Material[]> = this.materialsService.loadCollection();

        this.$q.all([selectItemsPromise, loadCollectionPromise]).then((data: any[]) => {
            var materials: EntityCollection<Material> = data[0];
            var options: Material[] = data[1];

            _.each(materials.items, (material: Material) => {
                var resolvedOption: Material = _.find(options, (option: Material) => option.id === material.id);
                material.name = resolvedOption.name;
                material.isResolved = true;
            });

            this.$scope.options = options;
            this.$scope.state.isLoading = false;

            this.$scope.onLoaded();
        });
    }
}

export = MaterialController;