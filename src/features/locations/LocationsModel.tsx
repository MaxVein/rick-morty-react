import { ColumnsId, EntityInfo } from '../../common/models/EntitiesModel';

export interface LocationData {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: string;
}
export interface LocationsData {
    info: EntityInfo;
    results: Array<LocationData>;
}

export interface Column {
    id: ColumnsId;
    label: string;
    minWidth?: number;
    align?: 'right' | 'center' | 'left';
    format?: (value: number) => string;
}
export const columns: Column[] = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'type',
        label: 'Type',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'dimension',
        label: 'Dimension',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];
