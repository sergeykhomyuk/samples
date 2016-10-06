import Item = require('../models/item');
import Issue = require('../models/issue/issue');

'use strict';

interface IBuildsApiService {
    getItems(): ng.IPromise<Item[]>;

    findIssue(itemId: number): ng.IPromise<Issue>;
}

export = IBuildsApiService;