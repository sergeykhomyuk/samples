import Medium = require('../models/medium');

interface IMediumControllerScope extends ng.IScope {
    state: {
        isLoading: boolean;
    }

    selectedMediumId: number;
    medium: Medium;
    mediums: Medium[];

    onChanged(data: { medium: Medium }): void;
    onLoaded(): void;
}

export = IMediumControllerScope;