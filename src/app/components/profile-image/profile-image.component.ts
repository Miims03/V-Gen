import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.css'
})
export class ProfileImageComponent implements OnInit {

  images: string[] = [];
  selectedImage: string | null = null;
  user: any = null;
  title: string = 'Changer l\'image de profil'

  ngOnInit(): void {
    this.loadImages();
    const userData = this.authService.getCurrentUser();
      if (userData) {
        this.user = JSON.parse(userData);
      }
  }

  constructor(private authService: AuthService, private router: Router) {}


 loadImages() {
    for (let i = 1; i <= 30; i++) {
      this.checkImageFormats(`users/profile${i}`).then((imgUrl) => {
        if (imgUrl) {
          this.images.push(imgUrl);
        }
      });
    }
  }

  checkImageFormats(basePath: string): Promise<string | null> {
    const formats = ['jpeg', 'png', 'webp', 'avif', 'svg'];
    const imagePromises = formats.map(format => this.checkImage(`${basePath}.${format}`));
    return Promise.all(imagePromises).then(results => {
      return results.find(url => url !== null) || null;
    });
  }

  checkImage(url: string): Promise<string | null> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }
  onImageClick(imageUrl: string) {
    this.selectedImage = imageUrl;
    console.log(`Image clicked: ${imageUrl}`);
  
    if (this.user) {
      // console.log('Current User:', this.user);
      // console.log('Username:', this.user.profileImg);
      // console.log('Selected Image:', this.selectedImage);
  
      if (this.selectedImage) {
        const updateSuccess = this.authService.updateProfileImage(this.selectedImage);
        if (updateSuccess) {
          console.log('Profile image updated successfully.');
          window.location.reload();
        } else {
          console.error('Failed to update profile image.');
        }
      }
    } else {
      console.error('No current user found.');
    }
  }
}
