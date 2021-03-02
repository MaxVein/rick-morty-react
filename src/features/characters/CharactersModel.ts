interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}
interface Column {
    id: 'id' | 'name' | 'status' | 'species' | 'gender';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export const columns: Column[] = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'species',
        label: 'Species',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];
