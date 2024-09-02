import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-changeinfo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-changeinfo.component.html',
  styleUrl: './profile-changeinfo.component.css'
})
export class ProfileChangeinfoComponent {

  title: string = 'Modifier mes informations personnelles';
  user: any = null

  errorMsg:string = '';
  succ:boolean = false;

  modifUsername: boolean = false;
  modifFirstname: boolean = false;
  modifLastname: boolean = false;
  modifDob: boolean = false;
  valideButton: boolean = false;

  currentUsername: string = '';
  newUsername: string = '';

  currentFirstname: string = '';
  newFirstname: string = '';

  currentLastname: string = '';
  newLastname: string = '';

  currentDob: string = '';
  newDob: string = '';
  

  toModifUsername() {
    this.modifUsername = !this.modifUsername
    this.valideButton = true;
    if (!this.modifUsername && !this.modifFirstname && !this.modifLastname && !this.modifDob) {
      this.valideButton = false;
    }
  }
  toModifFirstname() {
    this.modifFirstname = !this.modifFirstname
    this.valideButton = true;
    if (!this.modifUsername && !this.modifFirstname && !this.modifLastname && !this.modifDob) {
      this.valideButton = false;
    }
  }
  toModifLastname() {
    this.modifLastname = !this.modifLastname
    this.valideButton = true;
    if (!this.modifUsername && !this.modifFirstname && !this.modifLastname && !this.modifDob) {
      this.valideButton = false;
    }
  }
  toModifDob() {
    this.modifDob = !this.modifDob
    this.valideButton = true;
    if (!this.modifUsername && !this.modifFirstname && !this.modifLastname && !this.modifDob) {
      this.valideButton = false;
    }
  }

  constructor(private authService: AuthService, private router: Router) { }

  

  ngOnInit(): void {
    const userData = this.authService.getCurrentUser();
    if (userData) {
      this.user = JSON.parse(userData);
    }
    this.currentUsername = this.user.username;
    this.currentFirstname = this.user.firstName;
    this.currentLastname = this.user.lastName;
    this.currentDob = this.user.dob;
  
    this.newUsername = this.currentUsername
    this.newFirstname = this.currentFirstname
    this.newLastname = this.currentLastname
    this.newDob = this.currentDob
  }

 

  updateInfo() {
    if (!this.user) {
      return;
    }
 

    if (!this.newUsername || !this.newFirstname || !this.newLastname ||!this.newDob) {
      this.errorMsg = "Tous les champs doivent être remplis.";
      this.succ = false;
      return;
    }
    if ( this.currentUsername === this.newUsername &&
      this.currentFirstname === this.newFirstname &&
      this.currentLastname === this.newLastname &&
      this.currentDob === this.newDob ) {
      this.errorMsg = 'Les informations modifiées sont identiques.';
      this.succ = false;
      return;
    }
    const changeInfoSuccess = this.authService.changeInfo(this.newUsername, this.newFirstname , this.newLastname , this.newDob);

    if(changeInfoSuccess) {
      this.errorMsg = 'Les informations ont été modifié avec succès!';
      this.succ = true;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }else {
      this.errorMsg = 'Erreur lors de la modification!';
      this.succ = false;
    }
  }

}
