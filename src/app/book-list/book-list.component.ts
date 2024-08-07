import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ServiceBooksService } from '../service/service-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books?: Book[];

  constructor(private Booksservice: ServiceBooksService) {}

  ngOnInit(): void {
    this.books = this.Booksservice.getBooks();
  }
}
