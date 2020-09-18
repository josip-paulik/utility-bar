import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class OpenReservationItemCommand implements QueryFunction {

  id: number = 2;
  nounId: number = 2;
  verbId: number = 1;
  desc: string = "Open reservation item details";
  paramsDesc: string = '{Number} reservation item id';

  constructor() { }

  doCommand() {

  }

  setParams(param: any[]) {
  }

}
