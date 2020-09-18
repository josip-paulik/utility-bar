import { Noun } from './Noun';
import { Verb } from './Verb';

export interface QueryFunction {
  id: number;
  nounId: number;
  verbId: number;
  desc: string;
  paramsDesc: string;
}
