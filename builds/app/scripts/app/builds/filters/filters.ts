import angular = require('angular');
import percent = require('./percent');

'use strict';

var dependencies: string[] = [];
var filters: ng.IModule = angular.module('app.builds.filters', dependencies);

filters.filter('percent', percent);

export = filters;