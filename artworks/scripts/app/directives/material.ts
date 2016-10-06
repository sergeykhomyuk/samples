/// <amd-dependency path="selectize" />
import MaterialController = require('../controllers/materialController');
import IMaterialControllerScope = require('../controllers/IMaterialControllerScope');
import Material = require('../models/material');
import _ = require('underscore');

'use strict';

var material = [
    (): ng.IDirective => {
        return {
            restrict: 'AE',
            templateUrl: '/templates/material.tmpl',
            scope: {
                materials: '=',
                onAdd: '&',
                onRemove: '&',
                onLoaded: '&'
            },
            controller: MaterialController,
            link: ($scope: IMaterialControllerScope, $element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                var selectize: ISelectize = $element.find('input').selectize({
                    delimiter: ',',
                    persist: true,
                    openOnFocus: true,
                    options: [],
                    create: (value: string) => {
                        return {
                            value: value,
                            text: value
                        }
                    }
                })[0].selectize;

                $scope.$watch('state.isLoading', (isLoading: boolean) => {
                    if (isLoading) {
                        selectize.disable();
                    } else {
                        selectize.enable();
                    }
                });

                $scope.$watch('options', (options: Material[]) => {
                    if (!options || $scope.state.isLoading) {
                        return;
                    }

                    _.each(options, (option: Material) => {
                        selectize.addOption({ text: option.name, value: option.name });
                    });

                    selectize.refreshOptions(false);

                    _.each($scope.materials.items, (material: Material) => {
                        selectize.addItem(material.name);
                    });

                    selectize.on('item_add', (value: string) => {
                        $scope.$apply(() => {
                            $scope.addMaterial(value);
                        });
                    });

                    selectize.on('item_remove', (value: string) => {
                        $scope.$apply(() => {
                             $scope.removeMaterial(value);
                        });
                    });
                });
                
                $scope.$on('$destroy', () => {
                    selectize.destroy();
                });
            }
        };
    }
];

export = material;