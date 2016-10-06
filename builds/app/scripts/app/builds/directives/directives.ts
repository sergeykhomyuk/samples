import angular = require('angular');

import item = require('./item');
import itemHeader = require('./itemHeader');
import itemDetails = require('./itemDetails');
import itemState = require('./itemState');
import itemPropertyStatus = require('./itemPropertyStatus');

import metricsStatus = require('./metricsStatus/metricsStatus');
import metricsScore = require('./metricsStatus/metricsScore');

import buildStatus = require('./buildStatus/buildStatus');
import buildTarget = require('./buildStatus/buildTarget');

import testStatus = require('./testStatus/testStatus');
import testPassed = require('./testStatus/testPassed');
import testCoverage = require('./testStatus/testCoverage');

import itemResult = require('./result/itemResult');
import rejectedResult = require('./result/rejectedResult');
import buildSucceededResult = require('./result/buildSucceededResult');
import firewallSucceededResult = require('./result/firewallSucceededResult');

import issueTypeMessage = require('./issue/issueTypeMessage');

import accordion = require('./accordion/accordion');
import accordionGroup = require('./accordion/accordionGroup');
import accordionGroupHeader = require('./accordion/accordionGroupHeader');
import accordionGroupContent = require('./accordion/accordionGroupContent');


'use strict';

var dependencies: string[] = [];
var directives: ng.IModule = angular.module('app.builds.directives', dependencies);
directives.directive('appItem', item);
directives.directive('appItemHeader', itemHeader);
directives.directive('appItemDetails', itemDetails);
directives.directive('appItemState', itemState);
directives.directive('appItemPropertyStatus', itemPropertyStatus);

directives.directive('appMetricsStatus', metricsStatus);
directives.directive('appMetricsScore', metricsScore);

directives.directive('appBuildStatus', buildStatus);
directives.directive('appBuildTarget', buildTarget);

directives.directive('appTestStatus', testStatus);
directives.directive('appTestPassed', testPassed);
directives.directive('appTestCoverage', testCoverage);

directives.directive('appItemResult', itemResult);
directives.directive('appRejectedResult', rejectedResult);
directives.directive('appBuildSucceededResult', buildSucceededResult);
directives.directive('appFirewallSucceededResult', firewallSucceededResult);

directives.directive('appIssueTypeMessage', issueTypeMessage);

directives.directive('appAccordion', accordion);
directives.directive('appAccordionGroup', accordionGroup);
directives.directive('appAccordionGroupHeader', accordionGroupHeader);
directives.directive('appAccordionGroupContent', accordionGroupContent);

export = directives;