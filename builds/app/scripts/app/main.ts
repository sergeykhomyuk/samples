/// <reference path="../typings/typings.d.ts" />

(function (require: Require, view: Document) {
    'use strict';

    require(['./require.config'], (requireConfig: ConfigProvider) => {
        var applicationUrl: string = 'scripts/app';
        var libsUrl: string = 'scripts/libs';
        
        var config: RequireConfig = requireConfig.getConfig(applicationUrl, libsUrl);
        require.config(config);
        
        require(['angular', 'application', 'text'], (angular: ng.IAngularStatic, application: ng.IModule) => {
            angular.bootstrap(view, [application.name]);
        });
    });
    
}(require, document));
 