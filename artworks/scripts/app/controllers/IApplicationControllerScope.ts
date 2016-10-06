import Artwork = require('../models/artwork');

interface IApplicationControllerScope extends ng.IScope {
    state: {
        isLoading: boolean;
        isCreating: boolean;
    }

    filters: {
        artist: string;
    }

    artworks: Artwork[];

    createArtwork(): void;
    removeArtwork(artwork: Artwork): void;
}

export = IApplicationControllerScope;