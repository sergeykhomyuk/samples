import controllersModule = require('./controllers/controllers');
import directivesModule = require('./directives/directives');
import filtersModule = require('./filters/filters');
import servicesModule = require('./services/services');
import templatesModule = require('./templates/templates');

import config = require('./config');
import buildsRouter = require('./buildsRouter');

import angular = require('angular');

'use strict';

var dependencies: string[] = [
        controllersModule.name,
        directivesModule.name,
        filtersModule.name,
        servicesModule.name,
        templatesModule.name
];

var builds: ng.IModule = angular.module('app.builds', dependencies);
builds.constant('config', config);
builds.config(buildsRouter);

export = builds;