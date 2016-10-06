/// <amd-dependency path="text!./medium.html" />
/// <amd-dependency path="text!./material.html" />
/// <amd-dependency path="text!./artwork.html" />
/// <amd-dependency path="text!./confirm.html" />

var mediumTemplate: string = require("text!./medium.html");
var materialTemplate: string = require("text!./material.html");
var artworkTemplate: string = require("text!./artwork.html");
var confirmTemplate: string = require("text!./confirm.html");

import angular = require('angular');

'use strict';

var dependencies: string[] = [];
var templates: ng.IModule = angular.module('artwork.templates', dependencies);

templates.run([
    '$templateCache', ($templateCache: ng.ITemplateCacheService) => {
        $templateCache.put('/templates/medium.tmpl', mediumTemplate);
        $templateCache.put('/templates/material.tmpl', materialTemplate);
        $templateCache.put('/templates/artwork.tmpl', artworkTemplate);
        $templateCache.put('/templates/artwork/delete.tmpl', confirmTemplate);
    }
]);

export = templates;