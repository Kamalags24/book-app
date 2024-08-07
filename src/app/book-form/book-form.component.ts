import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Input() affiche!:boolean;

  inputForm = new FormGroup({ 
    title: new FormControl(''),
    author: new FormControl(''),
    statut: new FormControl(''),
  }) 

  // showForm() {
  //   this.affiche = !this.affiche;
  // }
  
}
