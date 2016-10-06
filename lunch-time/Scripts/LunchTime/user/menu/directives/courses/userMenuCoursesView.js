/**
 * userMenuCoursesView.
 * @file userMenuCoursesView.js.
 * @copyright Copyright ©  2014
 */
define([], function() {
    'use strict';

    var userMenuCoursesView = [
        function() {

            return {
                restrict: 'AE',
                templateUrl: '/template/user/menu/view.tmpl',
                scope: {
                    courses: '=',
                    date: '='
                },
                controller: 'userMenuCoursesViewController'
            };
        }
    ];

    return userMenuCoursesView;
});