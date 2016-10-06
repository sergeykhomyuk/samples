import StringUtils = require('./stringUtils');

'use strict';

if (!String.prototype.format) {
    String.prototype.format = function(...args: Object[]) {
        return StringUtils.format(this, args);
    }
}