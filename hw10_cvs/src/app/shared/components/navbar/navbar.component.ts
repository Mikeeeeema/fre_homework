import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  onClickContact() {
    this.router.navigate(['/contactUs']);
  }

  onClickAbout() {
    this.router.navigate(['/about']);
  }
}
