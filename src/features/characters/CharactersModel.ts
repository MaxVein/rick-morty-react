import { ColumnsId, EntityInfo } from '../../common/models/EntitiesModel';

export interface CharacterData {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}
export interface CharactersData {
    info: EntityInfo;
    results: Array<CharacterData>;
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
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'species',
        label: 'Species',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toFixed(2),
    },
];
