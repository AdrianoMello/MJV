import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserIdService } from './user-id.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyapi.io/data/v1/user';
  private apiKey = '64cbeddd253549dc8b990b71';

  constructor(private http: HttpClient, private userIdService: UserIdService) { }

  getUsers(currentPage: number) {
    const headers = {
      'app-id': this.apiKey
    };

    return this.http.get(`${this.apiUrl}?page=${currentPage}`, { headers });
  }

  getUsersWithId() {
    const userId = this.userIdService.getUserId();

    if (!userId) {
      throw new Error('UserID não definido');
    }

    const headers = {
      'app-id': this.apiKey,
    };

    const apiUrlWithUserId = `${this.apiUrl}/${userId}`;

    return this.http.get(apiUrlWithUserId, { headers });
  }

  editUser(firstName: string, lastName: string, email: string, phone: string, picture: string, dateOfBirth: string, title: string, gender: string, street: string, city: string, state: string, country: string) {
    const userId = this.userIdService.getUserId();

    if (!userId) {
      throw new Error('UserID não definido');
    }

    const headers = {
      'app-id': this.apiKey,
    };
  
    const apiUrlWithUserId = `${this.apiUrl}/${userId}`;
  
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      picture,
      dateOfBirth,
      title,
      gender,
      location: {
        street,
        city,
        state,
        country
      }
    };

    return this.http.put(apiUrlWithUserId, userData, { headers });
  }

  deleteUser(userId: string) {
    if (!userId) {
      throw new Error('UserID não definido');
    }

    const headers = {
      'app-id': this.apiKey,
    };

    const apiUrlWithUserId = `${this.apiUrl}/${userId}`;

    return this.http.delete(apiUrlWithUserId, { headers });
  }

  addUser(firstName: string, lastName: string, email: string, phone: string, picture: string, dateOfBirth: string, title: string, gender: string, street: string, city: string, state: string, country: string) {
    const headers = {
      'app-id': this.apiKey,
    };
  
    const apiUrlWithUserId = `${this.apiUrl}/create`;
  
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      picture,
      dateOfBirth,
      title,
      gender,
      location: {
        street,
        city,
        state,
        country
      }
    };

    return this.http.post(apiUrlWithUserId, userData, { headers });
  }
}
