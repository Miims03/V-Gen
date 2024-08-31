import { CommonModule } from '@angular/common';
import { Component , OnInit , Input  } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-produits-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits-card.component.html',
  styleUrl: './produits-card.component.css'
})
export class ProduitsCardComponent implements OnInit {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() color: string = "";
  @Input() delay = 500;
  @Input() premium: boolean = false;
  Hover: boolean = false
  ngOnInit() {
    AOS.init();
  }
}
