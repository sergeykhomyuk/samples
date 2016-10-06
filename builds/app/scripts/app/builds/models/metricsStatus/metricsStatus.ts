import ItemPropertyStatus = require('../itemPropertyStatus');
import MetricsScore = require('./metricsScore');

'use strict';

class MetricsStatus extends ItemPropertyStatus {
    public test: MetricsScore;
    public maintability: MetricsScore;
    public security: MetricsScore;
    public worksmanship: MetricsScore;
    
    constructor(state: number, test: MetricsScore, maintability: MetricsScore, security: MetricsScore, worksmanship: MetricsScore) {
        super(state);
        this.test = test;
        this.maintability = maintability;
        this.security = security;
        this.worksmanship = worksmanship;
    }
}

export = MetricsStatus;
