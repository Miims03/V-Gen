import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router , RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule , CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  profileImg: string = 'profile.png';
  errorMessage: string = '';
  acceptCG: boolean = false; 
  premium: boolean = false; 
  succ: boolean = false

  constructor(private authService: AuthService, private router: Router) { }

  
  register() {

    if (!this.firstName || !this.lastName || !this.dob || !this.username || !this.password || !this.confirmPassword) {
      this.errorMessage = "Tous les champs doivent être remplis.";
      this.succ = false;
      return;
    }

    if (!this.acceptCG) {
      this.errorMessage = "Vous devez accepter les conditions générales.";
      this.succ = false;
      return;
    }

   if (this.password !== this.confirmPassword) {
    this.errorMessage = "Les mots de passe ne correspondent pas.";
    this.succ = false;
    return;
  }

    const success = this.authService.register(this.firstName, this.lastName, this.dob, this.username, this.password, this.premium, this.profileImg);
 
    if (!success) {
      this.errorMessage = "Le nom d'utilisateur existe déjà.";
      this.succ = false;
    } else {
      this.errorMessage = "Inscription réussie.";
      this.succ = true;
      
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }
}
