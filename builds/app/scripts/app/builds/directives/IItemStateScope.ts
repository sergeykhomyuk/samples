import State = require('../models/state');

interface IItemStateScope extends ng.IScope {
    state: number;
    states: State; 
}

export = IItemStateScope;