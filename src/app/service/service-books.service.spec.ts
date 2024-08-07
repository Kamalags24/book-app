import { TestBed } from '@angular/core/testing';

import { ServiceBooksService } from './service-books.service';

describe('ServiceBooksService', () => {
  let service: ServiceBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
