'use strict';

var applicationRouter = [
    '$locationProvider', '$routeProvider', ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) => {

        $routeProvider.otherwise({
            redirectTo: '/builds'
        });

        $locationProvider.html5Mode(false);
    }
];

export = applicationRouter;