import { Injectable } from '@angular/core';
import { QUERY_FUNCTIONS } from './mock-query-functions';
import { NounService } from './noun.service';
import { VerbService } from './verb.service';
import { QueryFunction } from './query-function';

@Injectable({
  providedIn: 'root'
})
export class QueryFunctionService {

  queryFunctions = QUERY_FUNCTIONS;

  constructor(private nounService: NounService, private verbService: VerbService) { }

  queryForFunction(query: string) {

    var splitQuery = query.trim().split(' ');
    var verbText = splitQuery[0];
    var nounText = splitQuery[1];
    var result = this.queryFunctions;

    if (verbText != null) {
      var verb = this.verbService.getVerbByCommand(verbText);
      if (verb != null) {
        result = result.filter(x => x.verbId == verb.id);
      } else {
        return [] as QueryFunction[];
      }
    }

    if (nounText != null) {
      var noun = this.nounService.getNounByCommand(nounText);
      if (noun != null) {
        result = result.filter(x => x.nounId == noun.id);
      } else {
        return [] as QueryFunction[];
      }
    }

    return result;
  }

}
