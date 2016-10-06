require.config({
/*  baseUrl: '.',
    optimize: 'uglify2',
    out: 'inPlaceMigration.min.js',
    generateSourceMaps: true,
    preserveLicenseComments: false,*/
    include: [
        'require.config',
        'application'
    ],
    exclude: [
        'angular',
        'angular-resource',
        'angular-route',
        'angular-sanitize',
        'angular-animate',
        'jquery',
        'underscore',
        'text',
        'ui.bootstrap',
        'sweetAlert'
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
        'angular-animate': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['jquery', 'angular']
        },
        sweetAlert: {
            exports: 'sweetAlert'
        }
    },
    paths: {
        angular: '../libs/angularjs/angular',
        'angular-resource': '../libs/angularjs/angular-resource',
        'angular-route': '../libs/angularjs/angular-route',
        'angular-sanitize': '../libs/angularjs/angular-sanitize',
        'angular-animate': '../libs/angularjs/angular-animate',
        'ui.bootstrap': '../libs/ui-bootstrap/ui-bootstrap-tpls-0.11.2',
        jquery: '../libs/jquery/jquery.2.1.0',
        underscore: '../libs/underscore/underscore',
        chart: '../libs/chartjs/chart',
        text: '../libs/requirejs/text',
        sweetAlert: '../libs/sweet-alert/sweet-alert'
    }
})