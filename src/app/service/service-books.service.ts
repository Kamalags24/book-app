import { Injectable } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../../mock-books';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {
  books: Book[] = BOOKS;

  constructor() { }

  //Méthode de stockage des données 
  getBooks(): Book[] {
    return this.books;
  }
}
