export interface QueryFunction {
  id: number;
  nounId: number;
  verbId: number;
  desc: string;
  paramsDesc: string;
  doCommand: () => void;
  setParams: (param: any[]) => void;
}
