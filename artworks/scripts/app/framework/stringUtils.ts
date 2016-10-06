'use strict';

class StringUtils {

    /** 
     * Replaces the format item in a specified string with the string representation of a corresponding object in a specified array.
     * @param {string} format - A composite format string.
     * @param {array} args - An object array that contains zero or more objects to format.
     * @returns {string} A copy of format in which the format items have been replaced by the string representation of the corresponding objects in args.
     */
    public static format(format: string, ...args: Object[]): string {
        if (format == null) {
            throw new Error('Format string cannot be null.');
        }

        var result: string = format;

        for (var index = 0; index < args.length; index++) {
            var pattern: RegExp = new RegExp('\\{' + index + '\\}', 'gm');
            var value: string = args[index].toString();

            result = result.replace(pattern, value);
        }

        return result;
    }


    /** 
     * Check if string is ends with a specified value.
     * @param {string} source - Source string.
     * @param {string} subString - Sub string.
     * @returns {boolean} True if string ends with a specified value, otherwise - false.
     */
    public static endsWith(source: string, subString: string): boolean {
        if (source == null) {
            throw new Error('Source string cannot be null.');
        }

        return source.substring(source.length - subString.length, source.length) === subString;
    }


    /** 
     * Check if string is starts with a specified value.
     * @param {string} source - Source string.
     * @param {string} subString - Sub string.
     * @returns {boolean} True if string starts with a specified value, otherwise - false.
     */
    public static startsWith(source: string, subString: string): boolean {
        if (source == null) {
            throw new Error('Source string cannot be null.');
        }

        return source.substr(0, subString.length) === subString;
    }


    /** 
     * Trim specified sub string from the beginning of sourse string.
     * @param {string} source - Source string.
     * @param {string} subString - Sub string.
     * @returns {string} Trimmed source string.
     */
    public static trimStart(source: string, subString: string): string {
        if (source == null) {
            throw new Error('Source string cannot be null.');
        }

        return StringUtils.startsWith(source, subString)
            ? source.substring(subString.length, source.length)
            : source;
    }


    /** 
     * Trim specified sub string from the end of sourse string.
     * @param {string} source - Source string.
     * @param {string} subString - Sub string.
     * @returns {string} Trimmed source string.
     */
    public static trimEnd(source: string, subString: string): string {
        if (source == null) {
            throw new Error('Source string cannot be null.');
        }

        return StringUtils.endsWith(source, subString)
            ? source.substring(0, source.length - subString.length)
            : source;
    }

    /** 
     * Trim whitespaces from the beginning and end of sourse string.
     * @param {string} source - Source string.
     * @returns {string} Trimmed source string.
     */
    public static trimWhitespace(source: string): string {
        if (source == null) {
            throw new Error('Source string cannot be null.');
        }

        return source.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }


    /** 
     * Compare two strings for equality.
     * @param {string} firstString - First string.
     * @param {string} secondString - Second string.
     * @returns {boolean} True if strings are equal, otherwise - false.
     */
    public static equals(firstString: string, secondString: string): boolean {
        firstString = firstString || '';
        secondString = secondString || '';

        return firstString == secondString;
    }


    /** 
     * Compare two strings for case insensitive equality.
     * @param {string} firstString - First string.
     * @param {string} secondString - Second string.
     * @returns {boolean} True if strings are equal, otherwise - false.
     */
    public static equalsIgnoreCase(firstString: string, secondString: string): boolean {
        firstString = firstString || '';
        secondString = secondString || '';

        return firstString.toLowerCase() == secondString.toLowerCase();
    }


    /** 
     * Check is specified string contains substring.
     * @param {string} value - Source string.
     * @param {string} substring - Substring.
     * @returns {boolean} True if source string contains substring ignoring case, otherwise - false.
     */
    public static containsIgnoreCase(value: string, substring: string): boolean {
        value = (value || '').toLowerCase();
        substring = (substring || '').toLowerCase();

        var isContains: boolean = value.indexOf(substring) != -1;

        return isContains;
    }

    /** 
     * Check if specified string is not defined or empty.
     * @param {string} value - Source string.
     * @returns {boolean} True if source string is not defined or empty, otherwise - false.
     */
    public static isNullOrEmpty(value: string): boolean {
        if (!value || value.length === 0)
            return true;

        return false;
    }

    /** 
     * Generate random string with specified length from specified characters.
     * @param {number} length - Random string length.
     * @param {string?} characters - Characters for random string.
     * @returns {string} Random string.
     */
    public static generateRandom(length: number, characters?: string): string {
        characters = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        var randomString: string = '';

        for (var i: number = 0; i < length; i++) {
            var characterIndex: number = Math.floor(Math.random() * characters.length);
            randomString += characters.substring(characterIndex, characterIndex + 1);
        }

        return randomString;
    }
}

export = StringUtils;

