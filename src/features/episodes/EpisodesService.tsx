import { environment } from '../../environments/environment';
import { EpisodesData } from './EpisodesModel';

export async function getEpisodes(page: string): Promise<EpisodesData> {
    let slicedPage = page.slice(40);
    let response = await fetch(`${environment.BASEURL}episode/${slicedPage}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return response;
}
