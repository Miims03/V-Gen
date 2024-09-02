import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-perm',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './profile-perm.component.html',
  styleUrl: './profile-perm.component.css'
})
export class ProfilePermComponent implements OnInit {
  title: string = 'Devenir V-Premium';
  user: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const userData = this.authService.getCurrentUser();
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
  becomePrem() {
    const userid = this.user.id;
    const bePrem = this.authService.bePremium();

    if (bePrem) {
      console.log('V-Premium.');
      window.location.reload()
    } else {
      console.log('Pas V-Premium.');
    }
  }
}
