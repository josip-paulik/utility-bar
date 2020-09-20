import { QueryFunction } from '../query-function';
import { Reservation } from '../reservation';
import { ReservationManagmentService } from '../reservation-managment.service';

export class ImportReservation implements QueryFunction {

  id: number = 4;
  nounId: number = 1;
  verbId: number = 4;
  desc: string = "Import reservation";
  shortcut : string = "imp res"
  paramsDesc: string = '{Copied text from export}';

  reservationJson: string;

  constructor(private reservationManagmentService: ReservationManagmentService) { }

  async doCommand() {
    var reservation = JSON.parse(this.reservationJson) as Reservation;

    var unitIds = reservation.unitsReserved.map(x => x.id);

    this.reservationManagmentService.addReservation(unitIds);

    alert("Reservation imported!");
  }

  setParams(param: any[]) {
      this.reservationJson = param.join(' ');
  }

}
