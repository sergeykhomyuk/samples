'use strict';

class State {
    public static pending: number = 0;
    public static running: number = 1;
    public static failed: number = 2;
    public static succeeded: number = 3;
}

export = State;
