import FirewallItem = require('../../models/firewallItem');

interface IFirewallSucceededResultScope extends ng.IScope {
    item: FirewallItem;
    findMergedBuild(): void;
    onFindMergedBuild(): void;
}

export = IFirewallSucceededResultScope;