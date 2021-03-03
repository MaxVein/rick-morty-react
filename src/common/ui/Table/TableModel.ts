import {
    Column as CharactersColumn,
    CharacterData,
} from '../../../features/Characters/CharactersModel';
import { Column as EpisodeColumn, EpisodeData } from '../../../features/Episodes/EpisodesModel';
import { Column as LocationColumn, LocationData } from '../../../features/Locations/LocationsModel';

type entityColumns = CharactersColumn | EpisodeColumn | LocationColumn;
type entityData = CharacterData | EpisodeData | LocationData;

export interface TableProps {
    columns: Array<entityColumns>;
    data: Array<entityData>;
    amount: number;
    pageCounter: number;
    setPageCounter: React.Dispatch<React.SetStateAction<number>>;
}
