import { RatesModelRates } from './RatesModelRates';
export declare class RatesModel {
    'rates'?: RatesModelRates;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RatesModel): RatesModel;
}
