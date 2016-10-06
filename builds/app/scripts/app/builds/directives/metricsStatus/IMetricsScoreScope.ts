import MetricsScore = require('../../models/metricsStatus/metricsScore');
import MetricsScoreState = require('../../models/metricsStatus/metricsScoreState');

interface IMetricsScoreScope extends ng.IScope {
    name: string;
    score: MetricsScore;
    state: {
        isIncreased: boolean;
        isReduced: boolean;
        isNotChanged: boolean;
    }
}

export = IMetricsScoreScope;