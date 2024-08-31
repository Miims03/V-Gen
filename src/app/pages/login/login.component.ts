import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router , RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Cela indique que le composant est autonome
  templateUrl: './login.component.html',
  imports: [FormsModule , CommonModule, RouterLink] // Importez FormsModule ici directement
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  alert: string = '';
  succ: boolean = false

  constructor(private authService: AuthService , private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);

    if (!success) {
      this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
      this.alert = "alert alert-danger";
      this.succ = false;
    } else {
      this.errorMessage = "Connexion réussie.";
      this.alert = "alert alert-success";
      this.succ = true;
      setTimeout(() => {
        this.router.navigate(['/profile']).then(() => {
          window.location.reload(); // Forcer le rafraîchissement de la page
        });
      }, 2000);
     
    }
  }

}
