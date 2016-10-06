/// <amd-dependency path="ui.bootstrap" />
/// <amd-dependency path="angular-route" />
/// <amd-dependency path="angular-animate" />
/// <amd-dependency path="./framework/extensions" />

import builds = require('./builds/builds');
import applicationRouter = require('./applicationRouter');

'use strict';

var dependencies: string[] = ['ui.bootstrap', 'ngRoute', 'ngAnimate', builds.name];
var application: ng.IModule = angular.module('app', dependencies);
application.config(applicationRouter);
//application.constant('config', config);

//application.config(providers);

export = application;