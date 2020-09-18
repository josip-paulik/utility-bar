import { CurrencyService } from '../currency.service';
import { QueryFunction } from '../query-function';
import { ReservationManagmentService } from '../reservation-managment.service';

export class GetPriceInDestinationCurrency implements QueryFunction {

  id: number = 3;
  nounId: number = 4;
  verbId: number = 1;
  desc: string = "Get price in other currency";
  paramsDesc: string = '{Number} Amount in start currency {string} Start currency {string} Destination currency';

  amountInStartCurrency: number;
  startCurrency: string;
  destinationCurrency: string;

  constructor(private currencyService: CurrencyService) { }

  async doCommand() {
    var amountInDestinationCurrency = await this.currencyService
      .getAmountInDestinationCurrency(this.amountInStartCurrency, this.startCurrency, this.destinationCurrency);
    
    alert(`${this.amountInStartCurrency} ${this.startCurrency} = ${amountInDestinationCurrency} ${this.destinationCurrency}`);
  }

  setParams(param: any[]) {
      console.log(param);
      this.amountInStartCurrency = param[0] as number;
      this.startCurrency = (param[1] as string).toUpperCase();
      this.destinationCurrency = (param[2] as string).toUpperCase();
  }

}
