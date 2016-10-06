import ItemController = require('../controllers/itemController');

'use strict';

var item = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/item.tmpl',
            scope: {
                item: '='
            },
            controller: ItemController
        };
    }
];

export = item;