import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MenuComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rex_bussines';
  currentSection = 'home';
  private touchStartX = 0;
  private touchEndX = 0;
  
  navigateToSection(section: string) {
    this.currentSection = section;
  }
  
  nextSlide() {
    const sections = ['home', 'menu', 'about', 'contact'];
    const currentIndex = sections.indexOf(this.currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    this.currentSection = sections[nextIndex];
  }
  
  previousSlide() {
    const sections = ['home', 'menu', 'about', 'contact'];
    const currentIndex = sections.indexOf(this.currentSection);
    const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
    this.currentSection = sections[prevIndex];
  }
  
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }
  
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }
  
  private handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        this.nextSlide();
      } else {
        // Swipe right - previous slide
        this.previousSlide();
      }
    }
  }
}
