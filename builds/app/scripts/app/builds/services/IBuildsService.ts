import Item = require('../models/item');

interface IBuildsService {
    checkDisabled(item: Item): boolean;
}

export = IBuildsService;