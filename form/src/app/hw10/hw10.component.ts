import { Component } from '@angular/core';

@Component({
  selector: 'app-hw10',
  standalone: false,

  templateUrl: './hw10.component.html',
  styleUrl: './hw10.component.scss',
})
export class Hw10Component {
  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  allSelected: boolean = false;
  selectedMovies: boolean[] = new Array(this.itemlist.length).fill(false);

  updateSelectedMovies() {
    this.allSelected = this.selectedMovies.every((selected) => selected);
  }

  toggleSelectAll() {
    this.selectedMovies.fill(this.allSelected);
  }

  clearAll() {
    this.selectedMovies.fill(false);
    this.allSelected = false;
  }

  getSelectedMoives(): string[] {
    return this.itemlist.filter((e, i) => {
      return this.selectedMovies[i];
    });
  }
}
