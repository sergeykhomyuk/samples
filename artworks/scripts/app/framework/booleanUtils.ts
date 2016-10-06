'use strict';

class BooleanUtils {

    /** 
     * Parse boolean value from string.
     * @param {string} value - String value.
     * @returns {boolean} Parsed boolean value.
     */
    public static parse(value: string): boolean {
        if (value == null) {
            throw new Error('Cannot convert empty string to boolean.');
        }

        switch (value.toLowerCase()) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                throw Error('Cannot convert string "' + value + '" to boolean.');
        }
    }
}

export = BooleanUtils;