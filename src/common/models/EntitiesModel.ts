export type ColumnsId =
    | 'id'
    | 'name'
    | 'air_date'
    | 'episode'
    | 'characters'
    | 'status'
    | 'species'
    | 'gender'
    | 'dimension'
    | 'residents'
    | 'type';

export interface EntityInfo {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
}
