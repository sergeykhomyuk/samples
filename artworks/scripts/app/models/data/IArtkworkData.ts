interface IArtkworkData {
    artist?: string;
    description?: string;
    dimension1?: number;
    dimension2?: number;
    dimension3?: number;
    dimensions_in_cm?: boolean;
    id?: number;
    includes_vat?: boolean;
    materials?: string;
    medium?: string;
    price?: number;
    title?: string;
    url: string;
    vat?: number;
    year?: number;
}

export = IArtkworkData;