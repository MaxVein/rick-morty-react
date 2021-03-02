import { environment } from '../../environments/environment';

export async function getCharacters(page): Promise<any> {
    let characters = await fetch(`${environment.BASEURL}character/${page}`, {
        method: 'GET',
    }).then((res) => res.json());
    return characters;
}
