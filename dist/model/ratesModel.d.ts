import { RatesModelRates } from './ratesModelRates';
export declare class RatesModel {
    'rates'?: RatesModelRates;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RatesModel): RatesModel;
}
