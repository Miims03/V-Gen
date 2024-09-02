import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(firstName: string, lastName: string, dob: string, username: string, password: string, premium:boolean, profileImg:string): boolean {
    const users = this.getUsers();
    const userId = uuidv4();

    const usernameVerif = Object.values(users).find((user: any) => user.username === username);


    if (users[userId] || usernameVerif) {
      return false;
    }
    
    users[userId] = {id:userId, username, firstName, lastName, dob, password, premium, profileImg };
    this.saveUsers(users);

    return true;
  }

  login(username:string ,password: string): boolean {
    const users = this.getUsers();

    const user = Object.values(users).find((user: any) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user) );
      return true;
    }

    return false; 
  }

  updateProfileImage(newProfileImg: string): boolean {
    const currentUser = JSON.parse(this.getCurrentUser());
    console.log(currentUser.id)
    if (currentUser && currentUser.id) {
      const users = this.getUsers();
      if (users[currentUser.id]) {
        users[currentUser.id].profileImg = newProfileImg;
        this.saveUsers(users);
        localStorage.setItem('currentUser', JSON.stringify(users[currentUser.id]));
        return true;
      }
    }
    return false;
  }

  changePassword(newPassword: string): boolean {
    const currentUser = JSON.parse(this.getCurrentUser());
    if (currentUser && currentUser.id) {
      const users = this.getUsers();
      if (users[currentUser.id]) {
        users[currentUser.id].password = newPassword;
        this.saveUsers(users);
        localStorage.setItem('currentUser', JSON.stringify(users[currentUser.id]));
        return true;
      }
    }
    return false;
  }
  
  changeInfo(newUsername: string, newFirstname: string, newLastname: string, newDob: string): boolean {
    const currentUser = JSON.parse(this.getCurrentUser());
    if (currentUser && currentUser.id) {
      const users = this.getUsers();
      if (users[currentUser.id]) {
        users[currentUser.id].username = newUsername;
        users[currentUser.id].firstName = newFirstname;
        users[currentUser.id].lastName = newLastname;
        users[currentUser.id].dob = newDob;
        this.saveUsers(users);
        localStorage.setItem('currentUser', JSON.stringify(users[currentUser.id]));
        return true;
      }
    }
    return false;
  }

  bePremium(): boolean {
    const currentUser = JSON.parse(this.getCurrentUser());
    if (currentUser && currentUser.id) {
      const users = this.getUsers();
      if (users[currentUser.id]) {
        users[currentUser.id].premium = !users[currentUser.id].premium,
        this.saveUsers(users);
        localStorage.setItem('currentUser', JSON.stringify(users[currentUser.id]));
        return true;
      }
    }
    return false;
  }

  deleteUser(id: string): boolean {
    const users = this.getUsers();
    if (users[id]) {
      delete users[id];
      this.saveUsers(users);
      const currentUser = JSON.parse(this.getCurrentUser());
      if (currentUser && currentUser.id === id) {
        this.logout();
      }
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

  private getUsers(): any | null {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  }

  private saveUsers(users: any): void {
    localStorage.setItem('users', JSON.stringify(users))
  }
}
