import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from '../../components/profile-detail/profile-detail.component';
import { ProfileImageComponent } from '../../components/profile-image/profile-image.component';
import { ProfileChangemdpComponent } from '../../components/profile-changemdp/profile-changemdp.component';
import { ProfileDeleteaccComponent } from '../../components/profile-deleteacc/profile-deleteacc.component';
import { ProfileChangeinfoComponent } from '../../components/profile-changeinfo/profile-changeinfo.component';
import { ProfilePermComponent } from '../../components/profile-perm/profile-perm.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule , RouterLink, ProfileDetailComponent,ProfileImageComponent, ProfileChangemdpComponent, ProfileDeleteaccComponent, ProfileChangeinfoComponent, ProfilePermComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: any = null;
  detail: boolean = true;
  mofifMdp: boolean = false;
  deleteAccount: boolean = false;
  changeImage: boolean = false;
  mofifInfo:boolean = false;
  bePremium: boolean = false;

  toDetail() {
    this.detail = true;
    this.mofifMdp = false;
    this.deleteAccount = false;
    this.mofifInfo = false;
    this.changeImage = false;
    this.bePremium = false
  }
  toMdp() {
    this.detail = false;
    this.mofifMdp = true;
    this.deleteAccount = false;
    this.mofifInfo = false;
    this.changeImage = false;
    this.bePremium = false;
  }
  toDelete() {
    this.detail = false;
    this.mofifMdp = false;
    this.deleteAccount = true;
    this.mofifInfo = false;
    this.changeImage = false;
    this.bePremium = false;
  }
  toModifInfo(){
    this.detail = false;
    this.mofifMdp = false;
    this.deleteAccount = false;
    this.mofifInfo = true;
    this.changeImage = false;
    this.bePremium = false;
  }
  toChangeImage(){
    this.detail = false;
    this.mofifMdp = false;
    this.deleteAccount = false;
    this.mofifInfo = false;
    this.changeImage = true;
    this.bePremium = false;
  }
  toPrem(){
    this.detail = false;
    this.mofifMdp = false;
    this.deleteAccount = false;
    this.mofifInfo = false;
    this.changeImage = false;
    this.bePremium = true;
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const userData = this.authService.getCurrentUser();
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
}
