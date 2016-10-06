interface IConfig {
    urls: {
        artworks: string;
        materials: string;
        mediums: string;
        artworkMediums: string;
    }
    defaults: {
        medium: number
    }
    modelOptions: ng.IModelOptions;
    cache: {
        mediumCacheKeyFormat: string;
        materialCacheKeyFormat: string;
    }
}

export = IConfig;