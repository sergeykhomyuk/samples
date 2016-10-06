import Item = require('../models/item');
import IBuildsWatcher = require('./IBuildsWatcher');

interface IBuildsWatcherService {
    watch(callback: (items: Item[]) => void): IBuildsWatcher;
}

export = IBuildsWatcherService;