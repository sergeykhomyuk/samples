import Material = require('../models/material');
import EntityCollection = require('../models/entityCollection');

interface IMaterialControllerScope extends ng.IScope {
    state: {
        isLoading: boolean;
    }

    materials: EntityCollection<Material>;
    options: Material[];

    addMaterial(value: string): void;
    removeMaterial(value: string): void;

    onAdd(data: {material: Material}): ng.IPromise<Material>;
    onRemove(data: { material: Material }): ng.IPromise<Material>;
    onLoaded(): void;
}

export = IMaterialControllerScope;