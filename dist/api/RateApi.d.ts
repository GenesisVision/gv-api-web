import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { RatesModel } from "../model/RatesModel";
export declare class RateApi {
    private apiClient;
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
