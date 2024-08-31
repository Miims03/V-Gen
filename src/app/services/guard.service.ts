import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private authService : AuthService ,private router :Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Redirige l'utilisateur vers la page de connexion s'il n'est pas connecté
      this.router.navigate(['/login']);
      return false;
    }
  }
  getCurrentUser(){
    
  }
}
