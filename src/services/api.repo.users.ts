import { serverUrl } from "../config";
import { LoginUser, User } from "../entities/user";
import { LoginResponse } from "../types/login.response";


export class UserRepo {
  apiUrl = serverUrl + '/users';

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if(!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json()
  }

  async createUser(newUser: Partial<User>): Promise<User> {
    const url = this.apiUrl + '/register';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {'Content-Type': 'application/json'}
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async login(loginUser: LoginUser): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  // async getUpdatedUserById(id: string): Promise<User> {

  //   const url = this.apiUrl + '/reload/' + id
  //   const response = await fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })

  //   if (!response.ok) {
  //     throw new Error(response.status + ' ' + response.statusText)
  //   }
  //   return response.json()
  // }     // quitado 15/12
}


