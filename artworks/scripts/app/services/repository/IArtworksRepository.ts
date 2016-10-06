import IRepository = require('./IRepository');
import Artwork = require('../../models/artwork');

interface IArtworksRepository extends IRepository<Artwork> {   
}

export = IArtworksRepository;