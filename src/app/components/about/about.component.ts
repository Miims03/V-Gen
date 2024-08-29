import { Component , OnInit } from '@angular/core';
import { AboutCardComponent } from '../about-card/about-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}
