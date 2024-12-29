import { Component } from '@angular/core';

@Component({
  selector: 'app-hw6-change-title',
  standalone: false,

  templateUrl: './hw6-change-title.component.html',
  styleUrl: './hw6-change-title.component.css',
})
export class Hw6ChangeTitleComponent {
  cards: Card[] = [
    {
      id: 1,
      btncolor: 'red',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      content:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 2,
      btncolor: 'purple',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      content:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 3,
      btncolor: 'black',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      content:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 4,
      btncolor: 'green',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      content:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
  ];

  titleColor: string = '';

  handleClick(color: string) {
    this.titleColor = color;
  }
}

export interface Card {
  id: number;
  title: string;
  content: string;
  btncolor: string;
}
