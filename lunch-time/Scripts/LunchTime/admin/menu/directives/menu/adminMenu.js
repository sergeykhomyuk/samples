/**
 * Admin Menu.
 * @file adminMenu.js.
 * @copyright Copyright ©  2013
 */
define([], function() {
    'use strict';

    var adminMenu = [
        function() {

            return {
                restrict: 'AE',
                templateUrl: '/template/admin/menu/menu.tmpl',
                scope: {
                    courses: '=',
                    date: '='
                },
                controller: 'adminMenuController'
            };
        }
    ];

    return adminMenu;
});