import { Injectable } from '@angular/core';
import { ReservationManagmentService } from './reservation-managment.service';
import { QueryFunction } from './query-function';
import { OpenReservation } from './functions/openReservation';
import { GetPriceInDestinationCurrency } from './functions/getPriceInDestinationCurrency';
import { CurrencyService } from './currency.service';
import { AddReservationWithExistingUnits } from './functions/addReservationWithExistingUnits';
import { ExportReservation } from './functions/exportReservation';
import { ImportReservation } from './functions/importReservation';
import { GetUnitToReserve } from './functions/getUnitToReserve';
import { Noun } from './noun';
import { Verb } from './verb';

@Injectable({
  providedIn: 'root'
})
export class QueryFunctionService {

  verbs: Array<Verb>;
  nouns: Array<Noun>;

  queryFunctions = [] as QueryFunction[];

  startupNouns: Array<Noun> = [
    new Noun( 1, 'res' ),
    new Noun( 2, 'itm' ),
    new Noun( 3, 'cus' ),
    new Noun( 4, 'cur' )
  ]

  startupVerbs: Array<Verb> = [
    new Verb(1, 'get'),
    new Verb(2, 'add'),
    new Verb(3, 'calc'),
    new Verb(4, 'imp'),
    new Verb(5, 'exp')
  ];

  constructor(
    private reservationManagementService: ReservationManagmentService,
    private currencyService: CurrencyService) {
    this.nouns = this.startupNouns;
    this.verbs = this.startupVerbs;


    this.queryFunctions.push(new ExportReservation(reservationManagementService));
    this.queryFunctions.push(new ImportReservation(reservationManagementService));
    this.queryFunctions.push(new OpenReservation(reservationManagementService));
    this.queryFunctions.push(new GetPriceInDestinationCurrency(currencyService));
    this.queryFunctions.push(new AddReservationWithExistingUnits(reservationManagementService));
    this.queryFunctions.push(new GetUnitToReserve(reservationManagementService));
  }

  queryForFunction(query: string) {

    var splitQuery = query.trim().split(' ');
    var verbText = splitQuery[0];
    var nounText = splitQuery[1];
    var result = this.queryFunctions;

    if (verbText) {
      result = result.filter(x => this.verbs.find(y => y.command == verbText) != undefined && this.verbs.find(y => y.command == verbText).id == x.verbId);
      console.log(result);
    } else {
      return [] as QueryFunction[];
    }
  

    if (nounText) {
      result = result.filter(x => this.nouns.find(y => y.command == nounText) != undefined && this.nouns.find(y => y.command == nounText).id == x.nounId);
    } else {
      return [] as QueryFunction[];
    }

    return result;
  }

  runFunction(query: string) {
    var splitQuery = query.trim().split(' ');
    var verbText = splitQuery.shift();
    var nounText = splitQuery.shift();
    var result = this.queryFunctions;

    if (verbText) {
      result = result.filter(x => this.verbs.find(y => y.command == verbText) != undefined && this.verbs.find(y => y.command == verbText).id == x.verbId);
      console.log(result);
    } else {
      return [] as QueryFunction[];
    }

    if (nounText) {
      result = result.filter(x => this.nouns.find(y => y.command == nounText) != undefined && this.nouns.find(y => y.command == nounText).id == x.nounId);
    } else {
      return [] as QueryFunction[];
    }

    result[0].setParams(splitQuery);
    result[0].doCommand();
  }


}
