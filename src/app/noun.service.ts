import { Injectable } from '@angular/core';
import { NOUNS } from './mock-nouns';

@Injectable({
  providedIn: 'root'
})
export class NounService {

  nouns = NOUNS;

  constructor() { }

  getNounByCommand(command: string) {
    return this.nouns.find(x => x.command == command);
  }
}
