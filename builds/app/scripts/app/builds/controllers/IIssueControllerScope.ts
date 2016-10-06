import Issue = require('../models/issue/issue');

interface IIssueControllerScope extends ng.IScope {
    issue: Issue;
    state: {
        isLoading: boolean;
    }
}

export = IIssueControllerScope;