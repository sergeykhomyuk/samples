import MediumController = require('../controllers/mediumController');

'use strict';

var medium = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/medium.tmpl',
            scope: {
                medium: '=',
                onChanged: '&',
                onLoaded: '&'
            },
            controller: MediumController
        };
    }
];

export = medium;