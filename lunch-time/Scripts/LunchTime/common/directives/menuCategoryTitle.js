/**
 * menuCategoryTitle.
 * @file menuCategoryTitle.js.
 * @copyright Copyright ©  2013
 */
define([], function () {
    'use strict';

    var menuCategoryTitle = [function () {
        
        return {
            restrict: 'AE',
            templateUrl: '/templates/common/menuCategoryTitle.tmpl',
            scope: {
                category: '='
            }
        };
    }];

    return menuCategoryTitle;
});