import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: false,

  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  logoPath = '../../../assets/home/netflix_icon.png';
}
