import { environment } from '../../environments/environment';
import { LocationsData } from './LocationsModel';

export async function getLocations(page: string): Promise<LocationsData> {
    let slicedPage = page.slice(40);
    let response = await fetch(`${environment.BASEURL}location/${slicedPage}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return response;
}
