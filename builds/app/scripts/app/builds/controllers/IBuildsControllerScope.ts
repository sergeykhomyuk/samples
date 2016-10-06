import Item = require('../models/item');

interface IBuildsControllerScope extends ng.IScope {
    items: Item[];
}

export = IBuildsControllerScope;