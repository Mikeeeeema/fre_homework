import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  standalone: false,

  templateUrl: './directory.component.html',
  styleUrl: './directory.component.scss',
})
export class DirectoryComponent {
  users: person[] = [
    {
      name: 'George Bluth',
      portrait: 'https://randomuser.me/api/portraits/men/1.jpg',
      email: 'george.bluth@reqres.in',
    },
    {
      name: 'Janet Weaver',
      portrait: 'https://randomuser.me/api/portraits/women/2.jpg',
      email: 'janet.weaver@reqres.in',
    },
    {
      name: 'Emma Wong',
      portrait: 'https://randomuser.me/api/portraits/women/3.jpg',
      email: 'emma.wong@reqres.in',
    },
    {
      name: 'Eve Holt',
      portrait: 'https://randomuser.me/api/portraits/women/4.jpg',
      email: 'eve.holt@reqres.in',
    },
    {
      name: 'Charles Morris',
      portrait: 'https://randomuser.me/api/portraits/men/5.jpg',
      email: 'charles.morris@reqres.in',
    },
    {
      name: 'Tracey Ramos',
      portrait: 'https://randomuser.me/api/portraits/women/6.jpg',
      email: 'tracey.ramos@reqres.in',
    },
  ];
}

export interface person {
  name: string;
  portrait: string;
  email: string;
}
