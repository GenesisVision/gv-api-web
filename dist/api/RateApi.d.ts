import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { RateModel } from "../model/RateModel";
import { RatesModel } from "../model/RatesModel";
export declare class RateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getRate(from: string, to: string): CancelablePromise<RateModel>;
    private getRateWithHttpInfo;
    getRateExchange(exchange: string, from: string, to: string): CancelablePromise<RateModel>;
    private getRateExchangeWithHttpInfo;
    getRates(opts?: {
        from?: Array<string>;
        to?: Array<string>;
    }): CancelablePromise<RatesModel>;
    private getRatesWithHttpInfo;
}
