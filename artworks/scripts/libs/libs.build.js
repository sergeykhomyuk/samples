require.config({
/*  optimize: 'uglify2',
    baseUrl: './',
    out: 'Libs.min.js',
    generateSourceMaps: false,
    preserveLicenseComments: true,*/
    include: [
        'angular',
        'angular-resource',
        'angular-route',
        'angular-sanitize',
        'jquery',
        'underscore',
        'text',
        'ui.bootstrap',
        'selectize',
        'ladda',
        'spin',
        'amplify'
    ],
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['jquery', 'angular']
        },
        selectize: {
            deps: ['jquery']
        },
        ladda: {
            deps: ['jquery', 'spin']
        },
        spin: {
            deps: ['jquery']
        },
        amplify: {
            exports: 'amplify'
        }
    },
    paths: {
        angular: '../libs/angularjs/angular',
        'angular-resource': '../libs/angularjs/angular-resource',
        'angular-route': '../libs/angularjs/angular-route',
        'angular-sanitize': '../libs/angularjs/angular-sanitize',
        'ui.bootstrap': '../libs/ui-bootstrap/ui-bootstrap-tpls-0.11.2',
        jquery: '../libs/jquery/jquery.2.1.0',
        underscore: '../libs/underscore/underscore',
        chart: '../libs/chartjs/chart',
        text: '../libs/requirejs/text',
        selectize: '../libs/selectize/selectize',
        ladda: '../libs/ladda/ladda',
        spin: '../libs/spin/spin',
        amplify: '../libs/amplify/amplify'
    }
})