import Dimension = require('./dimension');
import Medium = require('./medium');
import Material = require('./material');
import EntityCollection = require('./entityCollection');
import Units = require('./units');
import Entity = require('./entity');

'use strict';

class Artwork extends Entity {
    public artist: string;
    public title: string;
    public description: string;
    public year: number;
    public price: number;
    public isIncludesVat: boolean;
    public vat: number;
    public dimension: Dimension;
    public medium: Medium;
    public materials: EntityCollection<Material>;
    public unit: Units;

    constructor() {
        super();        
    }
}

export = Artwork;
