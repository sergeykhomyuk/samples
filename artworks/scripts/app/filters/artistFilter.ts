import Artwork = require('../models/artwork');
import StringUtils = require('../framework/stringUtils');
import _ = require('underscore');

'use strict';

var artistFilter = [() => {
    return (artwork: Artwork, text: string) => {
        text = text || '';
        text = StringUtils.trimWhitespace(text);
        if (!text)
            return true;
       
       return !artwork.isResolved || StringUtils.containsIgnoreCase(artwork.artist, text);
    };
}];

export = artistFilter;