import { Injectable } from '@angular/core';
import { ReservationManagmentService } from './reservation-managment.service';
import { NounService } from './noun.service';
import { VerbService } from './verb.service';
import { QueryFunction } from './query-function';
import { OpenReservationCommand } from './functions/openReservationCommand';
import { GetPriceInDestinationCurrencyCommand } from './functions/getPriceInDestinationCurrencyCommand';
import { CurrencyService } from './currency.service';
import { AddReservationWithExistingUnitsCommand } from './functions/addReservationWithExistingUnitsCommand';
import { ExportReservationCommand } from './functions/exportReservationCommand';
import { ImportReservationCommand } from './functions/importReservationCommand';

@Injectable({
  providedIn: 'root'
})
export class QueryFunctionService {

  queryFunctions = [] as QueryFunction[];

  constructor(
    private nounService: NounService, 
    private verbService: VerbService, 
    private reservationManagementService: ReservationManagmentService,
    private currencyService: CurrencyService) {

    this.queryFunctions.push(new OpenReservationCommand(reservationManagementService));
    this.queryFunctions.push(new GetPriceInDestinationCurrencyCommand(currencyService));
    this.queryFunctions.push(new AddReservationWithExistingUnitsCommand(reservationManagementService));
    this.queryFunctions.push(new ExportReservationCommand(reservationManagementService));
    this.queryFunctions.push(new ImportReservationCommand(reservationManagementService));
  }

  queryForFunction(query: string) {

    var splitQuery = query.trim().split(' ');
    var verbText = splitQuery[0];
    var nounText = splitQuery[1];
    var result = this.queryFunctions;

    if (verbText) {
      var verb = this.verbService.getVerbByCommand(verbText);
      if (verb != null) {
        result = result.filter(x => x.verbId == verb.id);
      } else {
        return [] as QueryFunction[];
      }
    }

    if (nounText) {
      var noun = this.nounService.getNounByCommand(nounText);
      if (noun != null) {
        result = result.filter(x => x.nounId == noun.id);
      } else {
        return [] as QueryFunction[];
      }
    }

    return result;
  }

  runFunction(query: string) {
    var splitQuery = query.trim().split(' ');
    var verbText = splitQuery.shift();
    var nounText = splitQuery.shift();
    var result = this.queryFunctions;

    if (verbText) {
      var verb = this.verbService.getVerbByCommand(verbText);
      if (verb != null) {
        result = result.filter(x => x.verbId == verb.id);
      } else {
        return false;
      }
    } else {
      return false;
    }

    if (nounText) {
      var noun = this.nounService.getNounByCommand(nounText);
      if (noun != null) {
        result = result.filter(x => x.nounId == noun.id);
      } else {
        return false;
      }
    } else {
      return false;
    }

    result[0].setParams(splitQuery);
    result[0].doCommand();
  }


}
