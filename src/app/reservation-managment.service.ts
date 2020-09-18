import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Unit } from './unit';

@Injectable({
  providedIn: 'root'
})
export class ReservationManagmentService {
  reservations: Array<Reservation>;
  units: Array<Unit>;

  startupUnits: Array<Unit> = [
    new Unit(1, "Paradise", 100),
    new Unit(2, "Bus: Country roads", 200),
    new Unit(3, "Hotel California", 999),
    new Unit(4, "Bus: highway to hell", 500),
    new Unit(5, "Trip to Wadiya", 450)
  ]

  startupReservations: Array<Reservation> = [
    new Reservation(1, this.startupUnits.slice(0, 2)),
    new Reservation(2, this.startupUnits.slice(3, 6)),
    new Reservation(3, this.startupUnits.slice(2, 6))
  ];

  constructor() {
    this.reservations = this.startupReservations;
    this.units = this.startupUnits;
  }

  getAllReservations(): Array<Reservation> {
    return this.reservations;
  }

  getReservation(id: number): Reservation {
    var reservation = this.reservations.find(x => x.id == id);

    return reservation;
  }

  addReservation(unitIds: Array<number>): void {
    var unitsToReserve = this.units.filter(x => unitIds.find(y => y == x.id) !== undefined);
    
    var newId = this.reservations.length + 1;
    var reservation = new Reservation(newId, unitsToReserve);
    
    this.reservations.push(reservation);
  }
}
