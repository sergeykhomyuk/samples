import IRepository = require('./IRepository');
import Medium = require('../../models/medium');

interface IMediumsRepository extends IRepository<Medium> {   
}

export = IMediumsRepository;