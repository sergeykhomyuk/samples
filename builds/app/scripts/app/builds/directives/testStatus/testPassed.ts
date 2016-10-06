import ITestPassedScope = require('./ITestPassedScope');
import Chart = require('chart');

'use strict';

var testPassed = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/builds/test-status/test-passed.tmpl',
            scope: {
                passed: '=',
                failed: '='
            },
            replace: true,
            link: ($scope: ITestPassedScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                var canvas: HTMLCanvasElement = <HTMLCanvasElement>$element[0];
                var context: CanvasRenderingContext2D = canvas.getContext('2d');

                var data: CircularChartData[] = [
                    {
                        value: $scope.failed,
                        color: '#e9573f',
                        highlight: '#d9534f',
                        label: 'Failed'
                    },
                    {
                        value: $scope.passed,
                        color: '#8cc152',
                        highlight: '#8bc34a',
                        label: 'Passed'
                    }
                ];
                                
                var chart: CircularInstance = new Chart(context).Pie(data);

                $scope.$on('$destroy', () => chart.destroy());
            }
        };
    }
];

export = testPassed;