import angular = require('angular');
import artwork = require('./artwork');
import medium = require('./medium');
import material = require('./material');
import isLoading = require('./isLoading');

'use strict';

var dependencies: string[] = [];
var directives: ng.IModule = angular.module('artwork.directives', dependencies);

directives.directive('uiArtwork', artwork);
directives.directive('uiMedium', medium);
directives.directive('uiMaterial', material);

directives.directive('isLoading', isLoading);


export = directives;