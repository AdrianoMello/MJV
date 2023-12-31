import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  private userId: string = '';

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
