/**
 * controllers.
 * @file controllers.js.
 * @copyright Copyright ©
 */
define(
    [
        'angular',
        'admin/sales/controllers/adminSalesController',
        'admin/sales/controllers/adminSalesCoursesStatsController',
        'admin/sales/controllers/adminSalesUsersOrdersController',
        'admin/sales/controllers/adminSalesUserOrderController'
    ],
    function (angular, adminSalesController, adminSalesCoursesStatsController, adminSalesUsersOrdersController, adminSalesUserOrderController) {
        'use strict';

        var dependencies = [];
        var controllers = angular.module('lunchtime.admin.sales.controllers', dependencies);
        controllers.controller('adminSalesController', adminSalesController);
        controllers.controller('adminSalesCoursesStatsController', adminSalesCoursesStatsController);
        controllers.controller('adminSalesUsersOrdersController', adminSalesUsersOrdersController);
        controllers.controller('adminSalesUserOrderController', adminSalesUserOrderController);

        return controllers;
    });