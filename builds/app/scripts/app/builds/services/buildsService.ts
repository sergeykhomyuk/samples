import IBuildsService = require('./IBuildsService');
import Item = require('../models/item');
import State = require('../models/state');

import Assert = require('../../framework/assert');

'use strict';

/** 
* Builds service
* @class
*/
class BuildsService implements IBuildsService {
    /**
     * Builds service
     * @constructor
     */
    constructor() {
        
    }

    /** 
    * Check if item is disabled.
    * @param {object} item - Item.
    * @returns {boolean} is disabled.
    */
    public checkDisabled(item: Item): boolean {
        Assert.isNotNull(item, 'item');

        var isDisabled: boolean = item.state === State.pending || item.state === State.running;

        return isDisabled;
    }
}

export = BuildsService;
