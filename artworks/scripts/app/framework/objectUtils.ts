import _ = require('underscore');

'use strict';

class ObjectUtils {
    public static extendRecurcive<T>(target: T, members: T): T {
        var isExtendable = (obj: Object) => _.isObject(obj) && !_.isArray(obj);
        var isDefined = (obj: Object) => !_.isUndefined(obj) && !_.isNull(obj);

        for (var member in members) {
            if (!members.hasOwnProperty(member) || !isDefined(members[member]))
                continue;

            if (isDefined(target[member])) {
                if (isExtendable(members[member])) {
                    ObjectUtils.extendRecurcive(target[member], members[member]);
                } else {
                    target[member] = members[member];
                }
            } else {
                target[member] = members[member];
            }
        }

        return target;
    }
}

export = ObjectUtils;
