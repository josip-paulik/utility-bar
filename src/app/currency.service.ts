import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ExchangeRateResponse } from './exchange-rate-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  async getAmountInDestinationCurrency(amountInStartCurrency: number, startCurrency: string, destinationCurrency: string): Promise<number> {
    var exchangeRate = await this.getLatestExchangeRate(startCurrency, destinationCurrency);
    
    var amountInDestinationCurrency = amountInStartCurrency * exchangeRate;
    console.log(amountInDestinationCurrency);
    return amountInDestinationCurrency;
  }

  async getLatestExchangeRate(startCurrency: string, destinationCurrency: string): Promise<number> {
    var urlString = `https://api.exchangeratesapi.io/latest?base=${startCurrency}&symbols=${destinationCurrency}`;
    
    var exchangeRateResponse = await this.httpClient.get<ExchangeRateResponse>(urlString).toPromise();
    
    var exchangeRate = exchangeRateResponse.rates[destinationCurrency];

    console.log(exchangeRate)
    return exchangeRate;
  }
}
