import { Component, OnInit  } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-deleteacc',
  standalone: true,
  imports: [RouterLink , CommonModule],
  templateUrl: './profile-deleteacc.component.html',
  styleUrl: './profile-deleteacc.component.css'
})
export class ProfileDeleteaccComponent implements OnInit {
  title: string = 'Suppression du compte';
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const userData = this.authService.getCurrentUser();
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
deleteAccount() {
  const userid = this.user.id; // Nom d'utilisateur de l'utilisateur à supprimer
  const isDeleted = this.authService.deleteUser(userid);

  if (isDeleted) {
    console.log('Utilisateur supprimé avec succès.');
    window.location.reload()
  } else {
    console.log('Utilisateur non trouvé.');
  }
}
toProfile(){
  window.location.reload()
}

}
