﻿/**
 * popoverHtml.
 * @file popoverHtml.js.
 * @copyright Copyright ©  2014
 */
define([], function () {
    'use strict';

    var popoperHtml = [
        '$compile', '$timeout', '$parse', '$window', '$tooltip',
        function($compile, $timeout, $parse, $window, $tooltip) {
            return $tooltip('popoverHtml', 'popover', 'click');
        }
    ];

    return popoperHtml;
});