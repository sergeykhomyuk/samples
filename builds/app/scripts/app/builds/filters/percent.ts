import _ = require('underscore');

'use strict';

var percentFilter = [
    () => {
        return (value: number, total?: number) => {
            value = value || 0;

            if (!_.isUndefined(total)) {
                value = (value * 100) / total;
            }

            return '{0}%'.format(Math.round(value));
        };
    }
];

export = percentFilter;