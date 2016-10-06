/**
 * userMenuCourses.
 * @file userMenuCourses.js.
 * @copyright Copyright ©  2013
 */
define([], function() {
    'use strict';

    var userMenuCourses = [function () {

        return {
            restrict: 'AE',
            templateUrl: '/template/user/menu/courses.tmpl',
            scope: {
                courses: '=',
                wishedCourses: '=',
                date: '=',
                isFreezed: '=',
                onOrderCourse: '&'
            },
            controller: 'userMenuCoursesController'
        };
    }];

    return userMenuCourses;
});