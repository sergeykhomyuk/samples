import ArtworkController = require('../controllers/artworkController');

'use strict';

var artwork = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/artwork.tmpl',
            scope: {
                artwork: '=',
                onRemoved: '&'
            },
            replace: true,
            controller: ArtworkController
        };
    }
];

export = artwork;