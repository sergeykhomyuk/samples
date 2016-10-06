import Artwork = require('../models/artwork');
import Medium = require('../models/medium');
import Material = require('../models/material');
import Option = require('../models/option');
import Units = require('../models/units');

interface IArtworkControllerScope extends ng.IScope {
    state: {
        isLoading: boolean;
        showDescription: boolean;
        isMediumLoading: boolean;
        isMaterialsLoading: boolean;
    }

    config: {
        modelOptions: ng.IModelOptions;
    }

    artwork: Artwork;
    units: Option<number>[];

    artworkForm: ng.IFormController

    remove(): void;
    onRemoved(): void;
    toggleDescription(): void;

    artworkChanged(artwork: Artwork): void;
    changeMedium(medium: Medium): void;

    mediumsLoaded(): void;
    materialsLoaded(): void;
}

export = IArtworkControllerScope;