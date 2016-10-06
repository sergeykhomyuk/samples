import _ = require('underscore');

'use strict';

class DateUtils {
    public static mapJsonDate(value: Object): Date {
        if (_.isDate(value)) {
            return <Date>value;
        } else if (_.isString(value)) {
            var date: Date = new Date(<string>value);
            var isValid: boolean = DateUtils.isValidDate(date);
            if (isValid) {
                return date;
            } else {
                return null;
            }
        }
    }

    public static isValidDate(value: Date): boolean {
        if (Object.prototype.toString.call(value) === '[object Date]') {
            // it is a date
            if (isNaN(value.getTime())) { // d.valueOf() could also work
                // date is not valid
                return false;
            } else {
                // date is valid
                return true;
            }
        } else {
            // not a date
            return false;
        }
    }
}

export = DateUtils;
