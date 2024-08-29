import { Component, OnInit } from '@angular/core';
import { AllVodComponent } from '../../components/all-vod/all-vod.component';
import { HeroComponent } from '../../layouts/hero/hero.component';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { AboutComponent } from '../../components/about/about.component';
import { BackTopComponent } from '../../layouts/back-top/back-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AllVodComponent , 
    HeroComponent, 
    CommonModule,
    AboutComponent,
    BackTopComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    AOS.init();  // Initialiser AOS
  }
  inAnime = true
}
