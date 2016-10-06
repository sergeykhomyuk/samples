import BuildsController = require('./controllers/buildsController');
import IBuildsApiService = require('./services/IBuildsApiService');
import IConfig = require('./IConfig');

'use strict';

var buildsRouter = [
    '$routeProvider', '$locationProvider', 'config',
    ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, config: IConfig) => {

        var buildsRoute: ng.route.IRoute = {
            templateUrl: config.urls.views.builds,
            controller: BuildsController,
            resolve: {
                items: [
                    'buildsApiService', (buildsApiService: IBuildsApiService) => {
                        return buildsApiService.getItems();
                    }
                ]
            }
        };

        $routeProvider.when(config.urls.builds, buildsRoute);
    }
];

export = buildsRouter;