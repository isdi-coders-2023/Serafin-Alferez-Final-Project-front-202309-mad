import { serverUrl } from '../config';
import { Car } from '../entities/car';


export class CarsRepo {
  apiUrl = serverUrl + '/cars';

  async getCars(): Promise<Car[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
