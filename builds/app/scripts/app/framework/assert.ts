'use strict';

class Assert {

    public static isNotNull(value: Object, name?: string, message?: string): void {
        if (value === null || value === void 0) {
            var errorMessage: string = message || (name
                ? '"{0}" cannot be null.'
                : 'Specified value cannot be null.');

            throw new Error(errorMessage.format(name));
        }
    }

    public static isTrue(value: boolean, name?: string, message?: string): void {
        if (!value) {
            var errorMessage: string = message || (name
                ? '"{0}" is not a "true".'
                : 'Specified value is not a "true".');

            throw new Error(errorMessage.format(name));
        }
    }

    public static isFalse(value: boolean, name?: string, message?: string): void {
        if (value) {
            var errorMessage: string = message || (name
                ? '"{0}" is not a "false".'
                : 'Specified value is not a "false".');

            throw new Error(errorMessage.format(name));
        }
    }

    public static isMatch(value: string, pattern: RegExp, name?: string, message?: string): void {
        if (!pattern.test(value)) {
            var errorMessage: string = message || (name
                ? '"{0}" is not match pattern.'
                : 'Specified value is not match pattern.');

            throw new Error(errorMessage.format(name));
        }
    }

    public static inRange(value: Number, from: Number, to: Number, name?: string, message?: string): void {
        if (value < from || value > to) {
            var errorMessage: string = message || (name
                ? '"{0}" is out of range [{1}, {2}].'
                : 'Specified value out of range [{1}, {2}].');

            throw new Error(errorMessage.format(name || '', from, to));
        }
    }

    public static isArray(value: Object, name?: string, message?: string): void {
        if (Object.prototype.toString.call(value) !== '[object Array]') {
            var errorMessage: string = message || (name
                ? '"{0}" is not a array.'
                : 'Specified value is not a array.');

            throw new Error(errorMessage.format(name));
        }
    }
}

export = Assert;

