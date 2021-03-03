import { environment } from '../../environments/environment';
import { CharactersData } from './CharactersModel';

export async function getCharacters(page: string): Promise<CharactersData> {
    let slicedPage = page.slice(42);
    let response = await fetch(`${environment.BASEURL}character/${slicedPage}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return response;
}
