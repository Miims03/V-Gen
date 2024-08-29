import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // Cela indique que le composant est autonome
  templateUrl: './login.component.html',
  imports: [FormsModule , CommonModule] // Importez FormsModule ici directement
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  async onSubmit() {
    try {
      const response = await this.apiService.login(this.email, this.password);

      if (response.success) {
        console.log('lalalala');
      } else {
        this.errorMessage = response.message;
      }
    } catch (error) {
      this.errorMessage = 'Login failed';
    }
  }
}
