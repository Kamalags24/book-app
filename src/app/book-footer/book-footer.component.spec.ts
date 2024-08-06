import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFooterComponent } from './book-footer.component';

describe('BookFooterComponent', () => {
  let component: BookFooterComponent;
  let fixture: ComponentFixture<BookFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
