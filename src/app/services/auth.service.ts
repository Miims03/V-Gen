import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(firstName: string, lastName: string, dob: string, username: string, password: string, premium:boolean, profileImg:string): boolean {
    const users = this.getUsers();

    if (users[username]) {
      return false;
    }

    users[username] = { username, firstName, lastName, dob, password, premium, profileImg };
    this.saveUsers(users);

    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();

    if (users[username] && users[username].password === password) {
      const user = users[username];
      localStorage.setItem('currentUser', JSON.stringify(user) );
      return true;
    }

    return false; 
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): any | null {
    return localStorage.getItem('currentUser');
  }

  private getUsers(): any {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  }

  private saveUsers(users: any): void {
    localStorage.setItem('users', JSON.stringify(users))
  }
}
