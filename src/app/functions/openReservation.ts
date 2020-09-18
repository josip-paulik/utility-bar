import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class OpenReservation implements QueryFunction{

  id: number = 1;
  nounId: number = 1;
  verbId: number = 1;
  desc: string = "Open reservation details - get res";
  paramsDesc: string = '{Number} reservation id';

  reservationId: number;
 
  constructor(private reservationManagementService :  ReservationManagmentService) { }

  doCommand() {

    var reservation = this.reservationManagementService.getReservation(this.reservationId);
    var alertText = 'ReservationID = ' + reservation.id + '\n';
    reservation.unitsReserved.forEach(x => {
      alertText += 'Unit ID = ' + x.id + ' Unit name = ' + x.name + ' Unit price = ' + x.price + '\n';
    });
    alert(alertText);
  }

  setParams(param: any[]) {
    this.reservationId = param[0] as number;
  }

}
