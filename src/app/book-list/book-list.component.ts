import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books = [
    {
       id: 1, 
      title: 'Zéro bug', 
      author: 'Katy John',
       statut: 'Terminé' },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Giovanni Gics',
      statut: 'En attente',
    },
    {
      id: 3,
      title: 'Tout sur le Javascript',
      author: 'Paul Hussier',
      statut: 'Terminé',
    },
    {
      id: 3,
      title: 'La vie de pute',
      author: 'Aristide Naza',
      statut: 'Terminé',
    },
  ];
}
