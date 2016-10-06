import IRepository = require('./IRepository');
import Material = require('../../models/material');
import EntityCollection = require('../../models/entityCollection');

interface IArtworkMaterialsRepository extends IRepository<Material> {
    selectItems(entityCollection: EntityCollection<Material>): ng.IPromise<EntityCollection<Material>>;
    addMaterialToArtwork(artworkId: number, entity: Material): ng.IPromise<Material>;
    removeMaterialFromArtWork(artworkId: number, entity: Material): ng.IPromise<Material>;
}

export = IArtworkMaterialsRepository;