import { Currency } from './Currency';
export declare class NewProgramRequest {
    'currency': Currency;
    'periodLength': number;
    'successFee': number;
    'stopOutLevel': number;
    'leverage': number;
    'brokerAccountTypeId': string;
    'signalSuccessFee': number;
    'signalVolumeFee': number;
    'isSignalProgram': boolean;
    'investmentLimit': number;
    'tradesDelay': TradesDelayEnum;
    'entryFee': number;
    'depositAmount': number;
    'depositWalletId': string;
    'title': string;
    'description': string;
    'logo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NewProgramRequest;
}
declare type TradesDelayEnum = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';
export {};
