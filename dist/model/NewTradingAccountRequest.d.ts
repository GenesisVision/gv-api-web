import { Currency } from './Currency';
export declare class NewTradingAccountRequest {
    'depositAmount': number;
    'depositWalletId': string;
    'currency': Currency;
    'leverage': number;
    'brokerAccountTypeId': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NewTradingAccountRequest | undefined;
}
