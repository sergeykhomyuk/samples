import ItemDetailsController = require('../controllers/itemDetailsController');

'use strict';

var itemDetails = [
    (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: '/templates/builds/item-details.tmpl',
            scope: {
                item: '=',
                onFindIssues: '&',
                onDeployBuild: '&',
                onFindMergedBuild: '&'
            },
            controller: ItemDetailsController
        };
    }
];

export = itemDetails;