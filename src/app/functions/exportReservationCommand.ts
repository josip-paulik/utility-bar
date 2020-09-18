import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class ExportReservationCommand implements QueryFunction {

  id: number = 4;
  nounId: number = 1;
  verbId: number = 5;
  desc: string = "Export reservation for later use. - exp res";
  paramsDesc: string = '{ReservationId}';

  reservationId: number;

  constructor(private reservationManagmentService: ReservationManagmentService) { }

  async doCommand() {
    var reservation = this.reservationManagmentService.getReservation(this.reservationId);

    var reservationAsJSON = JSON.stringify(reservation);
    
    var dummy = document.createElement("input");

    // Add it to the document
    document.body.appendChild(dummy);

    dummy.value=reservationAsJSON;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  setParams(param: any[]) {
      this.reservationId = param[0] as number
  }

}
