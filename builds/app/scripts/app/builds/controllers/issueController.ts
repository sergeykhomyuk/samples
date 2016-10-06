import IIssueControllerScope = require('./IIssueControllerScope');
import IBuildsApiService = require('../services/IBuildsApiService');

import Issue = require('../models/issue/issue');
import Item = require('../models/item');

import Assert = require('../../framework/assert');

'use strict';

/** 
* Issue controller.
* @class
*/
class IssueController {
    private $scope: IIssueControllerScope;
    private apiService: IBuildsApiService;

    public static $inject: string[] = ['$scope', 'buildsApiService', 'item'];

    /**
     * Issue controller.
     * @param {object} $scope - Controller scope.
     * @param {object} apiService - Builds API Service.
     * @param {object} item - Item.
     * @constructor
     */
    constructor($scope: IIssueControllerScope, apiService: IBuildsApiService, item: Item) {
        Assert.isNotNull($scope, '$scope');
        Assert.isNotNull(apiService, 'apiService');
        Assert.isNotNull(item, 'item');

        this.$scope = $scope;
        this.apiService = apiService;

        this.$scope.state = {
            isLoading: true
        };

        this.$scope.issue = item.issue;

        this.apiService.findIssue(item.id).then((issue: Issue) => this.onIssueLoaded(issue));
    }

    /** 
    * Issue loaded handler.
    * @param {object} Issue - Issue.
    */
    private onIssueLoaded(issue: Issue): void {
        Assert.isNotNull(issue, 'issue');

        this.$scope.issue = issue;
        this.$scope.state.isLoading = false;
    }
}

export = IssueController;
