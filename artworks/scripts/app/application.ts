/// <amd-dependency path="./framework/extensions" />
/// <amd-dependency path="angular-resource" />
/// <amd-dependency path="ui.bootstrap" />

import angular = require('angular');

import controllersModule = require('./controllers/controllers');
import directivesModule = require('./directives/directives');
import filtersModule = require('./filters/filters');
import servicesModule = require('./services/services');
import templatesModule = require('./templates/templates');
import config = require('./config');

'use strict';

var dependencies: string[] = [
    'ngResource',
    'ui.bootstrap',
    controllersModule.name,
    directivesModule.name,
    filtersModule.name,
    servicesModule.name,
    templatesModule.name];

var application: ng.IModule = angular.module('artwork', dependencies);
application.constant('config', config);

export = application;