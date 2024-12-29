import { Component } from '@angular/core';

@Component({
  selector: 'app-change-title',
  standalone: false,

  templateUrl: './change-title.component.html',
  styleUrl: './change-title.component.css',
})
export class ChangeTitleComponent {
  cards: Card[] = [
    {
      id: 3,
      btncolor: 'red',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      context:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 5,
      btncolor: 'purple',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      context:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 8,
      btncolor: 'green',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      context:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 88,
      btncolor: 'blue',
      title:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
      context:
        "With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
  ];

  titlecolor = '';

  handleClick(color: string) {
    this.titlecolor = color;
  }
}

export interface Card {
  id: number;
  title: string;
  btncolor: string;
  context: string;
}
