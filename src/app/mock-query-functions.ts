import { QueryFunction } from './query-function';

export const QUERY_FUNCTIONS: QueryFunction[] = [
  { id: 1, nounId: 1, verbId: 1, desc: 'Open reservation details', paramsDesc: '{Number} reservation id' },
  { id: 2, nounId: 2, verbId: 1, desc: 'Open reservation item details', paramsDesc: '{Number} reservation item id' }
]
