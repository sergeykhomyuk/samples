'use strict';

class Option<T> {
    public value: T;
    public name: string;

    constructor(value: T, name: string) {
        this.value = value;
        this.name = name;
    }
}

export = Option;
