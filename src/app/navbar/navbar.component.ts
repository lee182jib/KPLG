import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public toggleFlag = false;

  public showDropdown() {
    this.toggleFlag = !this.toggleFlag;
  }
}
