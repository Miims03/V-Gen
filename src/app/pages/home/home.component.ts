import { Component, OnInit , HostListener , AfterViewInit } from '@angular/core';
import { AllVodComponent } from '../../components/all-vod/all-vod.component';
import { HeroComponent } from '../../layouts/hero/hero.component';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { AboutComponent } from '../../components/about/about.component';
import { ProduitsComponent } from '../../components/produits/produits.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AllVodComponent , 
    HeroComponent, 
    CommonModule,
    AboutComponent,
    ProduitsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}