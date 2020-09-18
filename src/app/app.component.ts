import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Reservation } from './reservation';
import { ReservationManagmentService } from './reservation-managment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'utlity-bar';
  reservations: Array<Reservation> = []
  /**
   *
   */
  constructor(private reservationManagmentService: ReservationManagmentService, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.reservations = this.reservationManagmentService.getAllReservations();
  }

  addNewReservation(): void {
    this.reservationManagmentService.addReservation([1, 2, 3]);
    this.reservations = this.reservationManagmentService.getAllReservations();
  }

  getReservation(reservationIdInput: string): void {
    var reservationId = parseInt(reservationIdInput);
    var reservation = this.reservationManagmentService.getReservation(reservationId);
    
    alert(`${reservation.id}  ${reservation.unitsReserved.length}`);
  }

  async getAmountInDestinationCurrency(checkAmountInput: string): Promise<void> {
    var checkAmountParams = checkAmountInput.split(' ');
    var amountInStartCurrency = parseFloat(checkAmountParams[0]);
    var startCurrency = checkAmountParams[1].toUpperCase();
    var destinationCurrency = checkAmountParams[2].toUpperCase();

    var amountInDestinationCurrency = await this.currencyService.getAmountInDestinationCurrency(amountInStartCurrency, startCurrency, destinationCurrency);
    
    alert(`${amountInStartCurrency} ${startCurrency} = ${amountInDestinationCurrency} ${destinationCurrency}`);
  }
}
