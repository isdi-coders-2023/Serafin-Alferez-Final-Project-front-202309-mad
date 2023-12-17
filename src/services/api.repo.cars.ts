import { serverUrl } from '../config';
import { Car } from '../entities/car';


export class CarsRepo {
  apiUrl = serverUrl + '/cars';
  constructor(public token: string) {}

  async getCars(): Promise<Car[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getCarsByPage(pageNumber: string): Promise<Car[]> {
    const response = await fetch(this.apiUrl + `/page/${pageNumber}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createCar(newCar: FormData): Promise<Car> {
    const url = this.apiUrl;
    const response = await fetch(url, {
      method: 'POST',
      body: newCar,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteCar(id: Car['id']): Promise<void> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
  }

  async updateCar(id: string, updatedCar: FormData): Promise<Car> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: updatedCar,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
