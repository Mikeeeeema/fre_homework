import { Component, Input } from '@angular/core';
import { ResultsEntity } from '../../services/interfaces/moive.interface';

@Component({
  selector: 'app-moiveitem',
  standalone: false,

  templateUrl: './moiveitem.component.html',
  styleUrl: './moiveitem.component.scss',
})
export class MoiveitemComponent {
  @Input()
  movie!: ResultsEntity;
}
