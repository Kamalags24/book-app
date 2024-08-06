import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Input() affiche!:boolean;

  // showForm() {
  //   this.affiche = !this.affiche;
  // }
  
}
