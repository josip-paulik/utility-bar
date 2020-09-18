import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class AddReservationWithExistingUnitsCommand implements QueryFunction {

  id: number = 4;
  nounId: number = 1;
  verbId: number = 2;
  desc: string = "Add reservation with existing unit Ids";
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
