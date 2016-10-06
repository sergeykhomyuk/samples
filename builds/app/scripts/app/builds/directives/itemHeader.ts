import ItemHeaderController = require('../controllers/itemHeaderController');

'use strict';

var itemHeader = [
    (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: '/templates/builds/item-header.tmpl',
            scope: {
                item: '=',
                isExpanded: '=expanded'
            },
            controller: ItemHeaderController
        };
    }
];

export = itemHeader;