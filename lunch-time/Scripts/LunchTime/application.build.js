﻿({
    optimize: 'uglify2',
    baseUrl: '.',
    out: 'LunchTime.min.js',
    generateSourceMaps: true,
    preserveLicenseComments: false,
    include: [
        'require.config',
        'application',
        'framework/class',
        'framework/assert',
        'framework/utils',
        'framework/extensions/extensions'
    ],
    exclude: ['angular',
        'angular-resource',
        'angular-route',
        'angular-sanitize',
        'angular-bootstrap',
        'angular-locale',
        'angular-touch',
        'angular-infinite-scroll',
        'jquery',
        'jquery-form',
        'underscore',
        'text',
        'ladda',
        'spin',
        'moment',
        'toastr',
        'plupload',
        'glisse'],
    paths: {
        angular: '../libs/angular/angular',
        'angular-resource': '../libs/angular/angular-resource',
        'angular-route': '../libs/angular/angular-route',
        'angular-sanitize': '../libs/angular/angular-sanitize',
        'angular-locale': '../libs/angular/i18n/angular-locale_ru-ru',
        'angular-touch': '../libs/angular/angular-touch',
        'angular-bootstrap': '../libs/bootstrap/ui-bootstrap-tpls',
        'angular-infinite-scroll': '../libs/nginfinitescroll/nginfinitescroll',
        jquery: '../libs/jquery/jquery',
        'jquery-form': '../libs/jquery/jquery.form',
        underscore: '../libs/underscore/underscore',
        text: '../libs/require/text',
        ladda: '../libs/ladda/ladda',
        spin: '../libs/spin/spin',       
        moment: '../libs/moment/moment',
        toastr: '../libs/toastr/toastr',
        plupload: '../libs/plupload/plupload.full.min',
        glisse: '../libs/glisse/glisse',
        framework: '../framework/'        
    }
})