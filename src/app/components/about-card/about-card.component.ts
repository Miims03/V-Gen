import { CommonModule } from '@angular/common';
import { Component , OnInit , Input  } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent implements OnInit {

  @Input() left: boolean = false;
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() text: string = "";
  ngOnInit() {
    AOS.init();
  }
}
