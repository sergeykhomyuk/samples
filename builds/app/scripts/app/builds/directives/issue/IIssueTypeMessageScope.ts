interface IIssueTypeMessageScope extends ng.IScope {
    issueType: number;
    state: {
        isMetricsReduction: boolean;
        isBuildFailed: boolean;
        isUnitTestFailed: boolean;
        isFunctionalTestFailed: boolean;
    }       
}

export = IIssueTypeMessageScope;