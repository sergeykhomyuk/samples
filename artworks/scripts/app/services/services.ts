import ArtworkMaterialsRepository = require('./repository/artworkMaterialsRepository');
import ArtworksRepository = require('./repository/artworksRepository');
import MaterialsRepository = require('./repository/materialsRepository');
import MediumsRepository = require('./repository/mediumsRepository');
import MediumsService = require('./mediumsService');
import MaterialsService = require('./materialsService');

import angular = require('angular');

'use strict';

var dependencies: string[] = [];
var services: ng.IModule = angular.module('artwork.services', dependencies);

services.service('artworkMaterialsRepository', ArtworkMaterialsRepository);
services.service('artworksRepository', ArtworksRepository);
services.service('materialsRepository', MaterialsRepository);
services.service('mediumsRepository', MediumsRepository);
services.service('mediumsService', MediumsService);
services.service('materialsService', MaterialsService);

export = services;