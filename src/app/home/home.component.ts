import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Output() navigate = new EventEmitter<string>();
  
  navigateToMenu() {
    this.navigate.emit('menu');
  }
  
  navigateToContact() {
    this.navigate.emit('contact');
  }
}
