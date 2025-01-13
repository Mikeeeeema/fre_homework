import { Component, Input } from '@angular/core';
import { ResultsEntity } from '../../services/interfaces/moive.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moiveitem',
  standalone: false,

  templateUrl: './moiveitem.component.html',
  styleUrl: './moiveitem.component.scss',
})
export class MoiveitemComponent {
  @Input()
  movie!: ResultsEntity;

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/detail', this.movie.id]);
  }
}
