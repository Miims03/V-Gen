import { Component } from '@angular/core';
import { ProduitsCardComponent } from '../produits-card/produits-card.component';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [ProduitsCardComponent ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // Scroll fluide
    }
  }
}
