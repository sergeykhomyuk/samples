import IConfig = require('./IConfig');

'use strict';

var applicationUrl: string = '';
var apiUrl: string = 'http://hss-gteam-api.azurewebsites.net/api';

var config: IConfig = {
    urls: {
        api: {
            getItems: apiUrl + '/items',
            findIssue: apiUrl + '/issues'
        },
        views: {
            builds: '/templates/builds.tmpl'
        },
        builds: applicationUrl + '/builds'
    },
    checkInterval: 15 * 1000
};

export = config;