import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class GetUnitToReserveCommand implements QueryFunction {

  id: number = 4;
  nounId: number = 2;
  verbId: number = 1;
  desc: string = "Finds unit by name";
  paramsDesc: string = '{String} unit name';

  unitName: string;

  constructor(private reservationManagementService: ReservationManagmentService) { }

  doCommand() {

    var units = this.reservationManagementService.getUnitsByName(this.unitName);

    var alertText = ""
    units.forEach(x => {
      alertText += 'Unit ID = ' + x.id + ' Unit name = ' + x.name + ' Unit price ' + x.price + '\n';
    })

  }

  setParams(param: any[]) {
    this.unitName = param[0] as string;
  }

}
