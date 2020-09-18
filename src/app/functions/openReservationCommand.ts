import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class OpenReservationCommand implements QueryFunction{

  id: number = 1;
  nounId: number = 1;
  verbId: number = 1;
  desc: string = "Open reservation details";
  paramsDesc: string = '{Number} reservation id';

  param1: number;
 
  constructor(private reservationManagementService :  ReservationManagmentService) { }

  doCommand() {

    var reservation = this.reservationManagementService.getReservation(this.param1);
    var alertText = 'ReservationID = ' + reservation.id + '\n';
    reservation.unitsReserved.forEach(x => {
      alertText += 'Unit ID = ' + x.id + ' Unit name = ' + x.name + ' Unit price = ' + x.price + '\n';
    });
    alert(alertText);
  }

  setParams(param: any[]) {
    this.param1 = param[0];
  }

}
