'use strict';

class ArrayUtils {

    /** 
     * Remove item from array.
     * @param {T[]} array - Source array.
     * @param {T} item - Item to remove.
     * @returns {T[]} Source array without item.
     */
    public static without<T>(array: T[], item: T): T[] {
        var index: number = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }

        return array;
    }

    /** 
     * Replace source item in array with target item.
     * @param {array} array - Array.
     * @param {T} source - Source item.
     * @param {T} target - Target item.
     * @returns {T[]} Array with replaced source item.
     */
    public static replace<T>(array: T[], source: T, target: T): T[] {
        var index: number = array.indexOf(source);
        if (index !== -1) {
            array[index] = target;
        }

        return array;
    }
}

export = ArrayUtils;
