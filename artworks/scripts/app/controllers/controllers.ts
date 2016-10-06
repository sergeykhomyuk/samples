import angular = require('angular');
import ApplicationController = require('./applicationController');

'use strict';

var dependencies: string[] = [];
var controllers: ng.IModule = angular.module('artwork.controllers', dependencies);

controllers.controller('applicationController', ApplicationController);

export = controllers;