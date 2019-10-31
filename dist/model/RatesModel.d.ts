import { RatesModelRates } from './RatesModelRates';
export declare class RatesModel {
    'rates': RatesModelRates;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RatesModel;
}
