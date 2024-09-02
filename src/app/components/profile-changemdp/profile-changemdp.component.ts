import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-changemdp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-changemdp.component.html',
  styleUrl: './profile-changemdp.component.css'
})
export class ProfileChangemdpComponent implements OnInit {

  title: string = 'Changer le mot de passe';
  user: any = null;
  currentPsw: string = '';
  currentPswVerify: string = '';
  newPsw: string = '';
  newPswVerify: string = '';
  errorMsg: string = '';
  succ:boolean = false;

  ngOnInit(): void {
    const userData = this.authService.getCurrentUser();
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  constructor(private authService: AuthService, private router: Router) { }

  changePassword() {
    if (!this.user) {
      this.errorMsg = 'Utilisateur non connecté!';
      this.succ = false;
      return;
    }

    this.currentPsw = this.user.password;

    if (!this.currentPswVerify || !this.newPsw || !this.newPswVerify) {
      this.errorMsg = "Tous les champs doivent être remplis.";
      this.succ = false;
      return;
    }

    if (this.currentPsw !== this.currentPswVerify) {
      this.errorMsg = 'Le mot de passe actuels n\'est pas correct!';
      this.succ = false;
      return;
    }

    if(this.newPsw !== this.newPswVerify) {
      this.errorMsg = 'Les nouveaux mots de passe ne correspondent pas!';
      this.succ = false;
      return;
    }

    const changePswSuccess = this.authService.changePassword(this.newPsw);
          
    if(changePswSuccess) {
      this.errorMsg = 'Mot de passe modifié avec succès!';
      this.succ = true;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }else {
      this.errorMsg = 'Erreur lors du changement du mot de passe!';
      this.succ = false;
    }
      
  }
}
