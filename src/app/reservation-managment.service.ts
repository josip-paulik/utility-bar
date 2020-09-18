import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Unit } from './unit';

@Injectable({
  providedIn: 'root'
})
export class ReservationManagmentService {
  reservations: Array<Reservation>;
  units: Array<Unit>;

  constructor() { }

  getAllReservations() {
    return this.reservations;
  }

  getReservation(id: number) {
    // return reservation with provided id
  }

  deleteReservation(id: number) {
    // delete reservation with provided id
  }

  addUnitToReservation(reservationId: number, unitId: number) {
    // add unit to reservation
  }
}
