import { ColumnsId, EntityInfo } from '../../common/models/EntitiesModel';

export interface EpisodeData {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}
export interface EpisodesData {
    info: EntityInfo;
    results: EpisodeData[];
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
        id: 'air_date',
        label: 'Air Date',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'episode',
        label: 'Episode',
        minWidth: 170,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'characters',
    //     label: 'Characters',
    //     minWidth: 170,
    //     align: 'center',
    //     format: (value: number) => value.toFixed(2),
    // },
];
