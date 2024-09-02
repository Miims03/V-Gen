import { Component, OnInit  } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent implements OnInit {

  user: any = null;
  title: string = 'Détails du profil';

  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    const userData = this.authService.getCurrentUser();
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
}
