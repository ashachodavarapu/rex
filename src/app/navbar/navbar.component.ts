import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() navigationClick = new EventEmitter<string>();
  
  navigate(section: string) {
    this.navigationClick.emit(section);
  }
}
