/**
 * salesData.
 * @file salesData.js.
 * @copyright Copyright ©  2014
 */
define(['framework/assert'], function(assert) {
    'use strict';

    /**
     * Sales data.
     * @param {date} date - Date.
     * @param {array} usersOrders - Users orders.
     * @constructor
     */
    var SalesData = function(date, usersOrders) {
        assert.isNotNull(date, 'date');
        assert.isArray(usersOrders, 'usersOrders');

        this.date = date;
        this.usersOrders = usersOrders;
    };

    return SalesData;
});