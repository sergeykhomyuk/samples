/**
 * weight.
 * @file weight.js.
 * @copyright Copyright ©  2014
 */
define([], function() {
    'use strict';
    
    var weight = [function () {
        return function (value) {
            if (value) {
                return '{0} гр.'.format(value);
            }

            return value;
        };
    }];

    return weight;
});