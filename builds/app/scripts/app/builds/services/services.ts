import angular = require('angular');

import BuildsService = require('./buildsService');
import BuildsApiService = require('./buildsApiService');
import BuildsWatcherService = require('./buildsWatcherService');
import NotificationsService = require('./notificationsService');


'use strict';

var dependencies: string[] = [];
var services: ng.IModule = angular.module('app.builds.services', dependencies);

services.service('buildsService', BuildsService);
services.service('buildsApiService', BuildsApiService);
services.service('buildsWatcherService', BuildsWatcherService);
services.service('notificationsService', NotificationsService);

export = services;