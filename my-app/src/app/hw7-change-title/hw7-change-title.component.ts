import { Component } from '@angular/core';

@Component({
  selector: 'app-hw7-change-title',
  standalone: false,

  templateUrl: './hw7-change-title.component.html',
  styleUrl: './hw7-change-title.component.css',
})
export class Hw7ChangeTitleComponent {
  persons: Person[] = [
    {
      id: 1,
      name: 'James',
      labelColor: 'red',
      context:
        '11111111This Introduction to Angular Tutorial gives you a glimpse of Angular. Angular is a UI framework for building mobile and desktop web applications. It is built using Javascript. Using Angular you can build amazing client-side applications using HTML, CSS, and Typescript. It is very important to know how the Angular framework works before you start using it. The following tutorials introduce you to Angular and discuss Angulars architecture.',
    },
    {
      id: 2,
      name: 'Will Kenny',
      labelColor: 'green',
      context:
        '2222222This Introduction to Angular Tutorial gives you a glimpse of Angular. Angular is a UI framework for building mobile and desktop web applications. It is built using Javascript. Using Angular you can build amazing client-side applications using HTML, CSS, and Typescript. It is very important to know how the Angular framework works before you start using it. The following tutorials introduce you to Angular and discuss Angulars architecture.',
    },
    {
      id: 3,
      name: 'Beth Williams',
      labelColor: 'blue',
      context:
        '3333333This Introduction to Angular Tutorial gives you a glimpse of Angular. Angular is a UI framework for building mobile and desktop web applications. It is built using Javascript. Using Angular you can build amazing client-side applications using HTML, CSS, and Typescript. It is very important to know how the Angular framework works before you start using it. The following tutorials introduce you to Angular and discuss Angulars architecture.',
    },
    {
      id: 4,
      name: 'Rev Shawn',
      labelColor: 'black',
      context:
        '4444444This Introduction to Angular Tutorial gives you a glimpse of Angular. Angular is a UI framework for building mobile and desktop web applications. It is built using Javascript. Using Angular you can build amazing client-side applications using HTML, CSS, and Typescript. It is very important to know how the Angular framework works before you start using it. The following tutorials introduce you to Angular and discuss Angulars architecture.',
    },
  ];

  currentContent = '';
  currentName = '';
  handleClick(person: Person) {
    this.currentName = person.name;
    this.currentContent = person.context;
  }
}

export interface Person {
  id: number;
  name: string;
  labelColor: string;
  context: string;
}
