
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000';

  constructor() {}
  
  getVideoData() {

    return axios.get(`${this.apiUrl}/api/video`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la requête GET:', error);
        throw error;
      });
  }
  async login(email: string, password: string){
    try {
      const response = await axios.post(`${this.apiUrl}/api/login`, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      if (error) {
        return { success: false, message: error};
      }
      return { success: false, message: 'An error occurred' };
    }
  }
}
