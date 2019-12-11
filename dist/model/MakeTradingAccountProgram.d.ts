import { TradesDelay } from './TradesDelay';
export declare class MakeTradingAccountProgram {
    'id': string;
    'periodLength': number;
    'stopOutLevel': number;
    'investmentLimit': number;
    'tradesDelay': TradesDelay;
    'entryFee': number;
    'successFee': number;
    'title': string;
    'description': string;
    'logo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MakeTradingAccountProgram | undefined;
}
