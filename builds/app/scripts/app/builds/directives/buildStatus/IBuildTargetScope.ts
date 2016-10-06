import BuildTargetState = require('../../models/buildStatus/buildTargetState');

interface IBuildTargetScope extends ng.IScope {
    icon: string;
    name: string;
    buildState: number;
    state: {
        isSucceeded: boolean;
        isFailed: boolean;
    }
}

export = IBuildTargetScope;