/// <amd-dependency path="text!./builds.html" />
/// <amd-dependency path="text!./item.html" />
/// <amd-dependency path="text!./itemHeader.html" />
/// <amd-dependency path="text!./itemDetails.html" />
/// <amd-dependency path="text!./itemState.html" />
/// <amd-dependency path="text!./itemPropertyStatus.html" />
/// <amd-dependency path="text!./itemPropertyDetails.html" />

/// <amd-dependency path="text!./metricsStatus/metricsStatus.html" />
/// <amd-dependency path="text!./metricsStatus/metricsScore.html" />

/// <amd-dependency path="text!./buildStatus/buildStatus.html" />
/// <amd-dependency path="text!./buildStatus/buildTarget.html" />

/// <amd-dependency path="text!./testStatus/testStatus.html" />
/// <amd-dependency path="text!./testStatus/testPassed.html" />
/// <amd-dependency path="text!./testStatus/testCoverage.html" />


/// <amd-dependency path="text!./result/itemResult.html" />
/// <amd-dependency path="text!./result/rejectedResult.html" />
/// <amd-dependency path="text!./result/buildSucceededResult.html" />
/// <amd-dependency path="text!./result/firewallSucceededResult.html" />

/// <amd-dependency path="text!./issue/issue.html" />
/// <amd-dependency path="text!./issue/issueTypeMessage.html" />

/// <amd-dependency path="text!./accordion/accordion.html" />
/// <amd-dependency path="text!./accordion/accordionGroup.html" />
/// <amd-dependency path="text!./accordion/accordionGroupHeader.html" />
/// <amd-dependency path="text!./accordion/accordionGroupContent.html" />

var buildsTemplate: string = require('text!./builds.html');
var itemTemplate: string = require('text!./item.html');
var itemHeaderTemplate: string = require('text!./itemHeader.html');
var itemDetailsTemplate: string = require('text!./itemDetails.html');
var itemStateTemplate: string = require('text!./itemState.html');
var itemPropertyStatusTemplate: string = require('text!./itemPropertyStatus.html');
var itemPropertyDetailsTemplate: string = require('text!./itemPropertyDetails.html');

var metricsStatusTemplate: string = require('text!./metricsStatus/metricsStatus.html');
var metricsScoreTemplate: string = require('text!./metricsStatus/metricsScore.html');

var buildStatusTemplate: string = require('text!./buildStatus/buildStatus.html');
var buildTargetTemplate: string = require('text!./buildStatus/buildTarget.html');

var testStatusTemplate: string = require('text!./testStatus/testStatus.html');
var testPassedTemplate: string = require('text!./testStatus/testPassed.html');
var testCoverageTemplate: string = require('text!./testStatus/testCoverage.html');

var itemResultTemplate: string = require('text!./result/itemResult.html');
var rejectedResultTemplate: string = require('text!./result/rejectedResult.html');
var buildSucceededResultTemplate: string = require('text!./result/buildSucceededResult.html');
var firewallSucceededResultTemplate: string = require('text!./result/firewallSucceededResult.html');

var issueTemplate: string = require('text!./issue/issue.html');
var issueTypeMessageTemplate: string = require('text!./issue/issueTypeMessage.html');

var accordionTemplate: string = require('text!./accordion/accordion.html');
var accordionGroupTemplate: string = require('text!./accordion/accordionGroup.html');
var accordionGroupHeaderTemplate: string = require('text!./accordion/accordionGroupHeader.html');
var accordionGroupContentTemplate: string = require('text!./accordion/accordionGroupContent.html');

import angular = require('angular');

'use strict';

var dependencies: string[] = [];
var templates: ng.IModule = angular.module('app.builds.templates', dependencies);

templates.run([
    '$templateCache', ($templateCache: ng.ITemplateCacheService) => {
        $templateCache.put('/templates/builds.tmpl', buildsTemplate);

        $templateCache.put('/templates/builds/item.tmpl', itemTemplate);
        $templateCache.put('/templates/builds/item-header.tmpl', itemHeaderTemplate);
        $templateCache.put('/templates/builds/item-details.tmpl', itemDetailsTemplate);
        $templateCache.put('/templates/builds/item-state.tmpl', itemStateTemplate);
        $templateCache.put('/templates/builds/item-property-status.tmpl', itemPropertyStatusTemplate);
        $templateCache.put('/templates/builds/item-property-details.tmpl', itemPropertyDetailsTemplate);

        $templateCache.put('/templates/builds/metrics-status/metrics-status.tmpl', metricsStatusTemplate);
        $templateCache.put('/templates/builds/metrics-status/metrics-score.tmpl', metricsScoreTemplate);

        $templateCache.put('/templates/builds/build-status/build-status.tmpl', buildStatusTemplate);
        $templateCache.put('/templates/builds/build-status/build-target.tmpl', buildTargetTemplate);

        $templateCache.put('/templates/builds/test-status/test-status.tmpl', testStatusTemplate);
        $templateCache.put('/templates/builds/test-status/test-passed.tmpl', testPassedTemplate);
        $templateCache.put('/templates/builds/test-status/test-coverage.tmpl', testCoverageTemplate);

        $templateCache.put('/templates/builds/result/item-result.tmpl', itemResultTemplate);
        $templateCache.put('/templates/builds/result/rejected-result.tmpl', rejectedResultTemplate);
        $templateCache.put('/templates/builds/result/build-succeeded-result.tmpl', buildSucceededResultTemplate);
        $templateCache.put('/templates/builds/result/firewall-succeeded-result.tmpl', firewallSucceededResultTemplate);

        $templateCache.put('/templates/builds/issue/issue.tmpl', issueTemplate);
        $templateCache.put('/templates/builds/issue/issue-type-message.tmpl', issueTypeMessageTemplate);

        $templateCache.put('/templates/accordion/accordion.tmpl', accordionTemplate);
        $templateCache.put('/templates/accordion/accordion-group.tmpl', accordionGroupTemplate);
        $templateCache.put('/templates/accordion/accordion-group-header.tmpl', accordionGroupHeaderTemplate);
        $templateCache.put('/templates/accordion/accordion-group-content.tmpl', accordionGroupContentTemplate);
    }
]);

export = templates;