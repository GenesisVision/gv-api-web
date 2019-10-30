import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { RatesModel } from "../model/ratesModel";
export declare class RateService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getRate(from: string, to: string): CancelablePromise<number>;
    private getRateWithHttpInfo;
    getRateExchange(exchange: string, from: string, to: string): CancelablePromise<number>;
    private getRateExchangeWithHttpInfo;
    getRates(opts?: {
        from?: Array<string>;
        to?: Array<string>;
    }): CancelablePromise<RatesModel>;
    private getRatesWithHttpInfo;
}
