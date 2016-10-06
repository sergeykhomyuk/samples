import artistFilter = require('./artistFilter');

import angular = require('angular');

'use strict';

var dependencies: string[] = [];
var filters: ng.IModule = angular.module('artwork.filters', dependencies);

filters.filter('artistFilter', artistFilter);

export = filters;