import { TestBed } from '@angular/core/testing';

import { ReservationManagmentService } from './reservation-managment.service';

describe('ReservationManagmentService', () => {
  let service: ReservationManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
