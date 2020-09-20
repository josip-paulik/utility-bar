import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class ExportReservation implements QueryFunction {

  id: number = 5;
  nounId: number = 1;
  verbId: number = 5;
  desc: string = "Export reservation for later use";
  shortcut : string = "exp res {}"
  paramsDesc: string = '{Reservation ID}';

  reservationId: number;

  constructor(private reservationManagmentService: ReservationManagmentService) { }

  async doCommand() {
    var reservation = this.reservationManagmentService.getReservation(this.reservationId);

    var reservationAsJSON = JSON.stringify(reservation);
    
    var dummy = document.createElement("input");

    document.body.appendChild(dummy);

    dummy.value=reservationAsJSON;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    alert("Reservation copied to clipboard!");
  }

  setParams(param: any[]) {
      this.reservationId = param[0] as number
  }

}
