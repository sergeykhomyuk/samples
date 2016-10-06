import StringUtils = require('./stringUtils');

'use strict';

if (!String.prototype.format) {
    String.prototype.format = function (...args: Object[]) {        
        args = Array.prototype.slice.call(args);
        
        var params: Object[] = [this];
        params = params.concat(args);

        return StringUtils.format.apply(this, params);
    }
}