import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import 'animate.css';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
        }
      }
    });
  }
}
