import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class AddReservationWithExistingUnits implements QueryFunction {

  id: number = 6;
  nounId: number = 1;
  verbId: number = 2;
  desc: string = "Add reservation with existing unit Ids";
  shortcut: string = "add res {}...";
  paramsDesc: string = '{List of unit ids separated by space}';

  listOfUnitIds: number[];

  constructor(private reservationManagmentService: ReservationManagmentService) { }

  async doCommand() {
    this.reservationManagmentService.addReservation(this.listOfUnitIds);
  }

  setParams(param: any[]) {
      this.listOfUnitIds = param.map(x => parseInt(x));
  }

}
