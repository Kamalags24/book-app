import { Component } from '@angular/core';
import { GetDateService } from '../service/get-date.service';

@Component({
  selector: 'app-book-footer',
  templateUrl: './book-footer.component.html',
  styleUrl: './book-footer.component.css'
})
export class BookFooterComponent {
  Today = "";

  constructor(
    private today:GetDateService
  ) {}

  ngOnInit():void {
    this.Today = "Date today: " + this.today.Today();
  }
}
