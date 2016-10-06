import IRepository = require('./IRepository');
import Material = require('../../models/material');

interface IMaterialsRepository extends IRepository<Material> {   
}

export = IMaterialsRepository;