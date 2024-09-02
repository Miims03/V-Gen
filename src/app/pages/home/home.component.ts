import { Component} from '@angular/core';
import { AllVodComponent } from '../../components/all-vod/all-vod.component';
import { HeroComponent } from '../../layouts/hero/hero.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { ProduitsComponent } from '../../components/produits/produits.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AllVodComponent , 
    HeroComponent, 
    CommonModule,
    AboutComponent,
    ProduitsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}