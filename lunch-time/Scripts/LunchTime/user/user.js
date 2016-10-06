/**
 * user module.
 * @file user.js.
 * @copyright Copyright ©  2013
 */
define(
    [
        'angular', 'common/common',
        'user/user.config',
        'user/user.routes',
        'user/menu/menu'
    ],
    function (angular, common, userConfig, userRoutes, menuModule) {
        'use strict';

        var dependencies = [
            common.name,
            menuModule.name
        ];

        var userModule = angular.module('lunchtime.user', dependencies);
        userModule.constant('user.config', userConfig);
        userModule.config(userRoutes);

        return userModule;
    });