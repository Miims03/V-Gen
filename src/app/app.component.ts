import { Component , AfterViewInit ,HostListener } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from "./layouts/navbar/navbar.component"
import { ViewportScroller } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import 'animate.css'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  private currentSectionIndex = 0
  private isScrolling = false

  ngAfterViewInit() {
  }

  @HostListener('window:wheel', ['$event'])
  
  onScroll(event: WheelEvent) {

    if (this.isScrolling) {
      return
    }

    this.isScrolling = true;

    if (event.deltaY > 0) {
      this.goToNextSection()
    } else if (event.deltaY < 0) {
      this.goToPreviousSection()
    }
    setTimeout(() => {
      this.isScrolling = false;
    }, 800)
  
  }

  private goToNextSection() {
    const sections = ['home', 'about', 'produits']
    if (this.currentSectionIndex < sections.length - 1) {
      this.currentSectionIndex++
      this.scrollToSection(sections[this.currentSectionIndex])
    }
  }

  private goToPreviousSection() {
    const sections = ['home', 'about', 'produits']
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--
      this.scrollToSection(sections[this.currentSectionIndex])
    }
  }

  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
