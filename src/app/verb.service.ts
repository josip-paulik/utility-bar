import { Injectable } from '@angular/core';
import { VERBS } from './mock-verbs';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  verbs = VERBS;

  constructor() { }

  getVerbByCommand(command: string) {
    return this.verbs.find(x => x.command == command);
  }
}
