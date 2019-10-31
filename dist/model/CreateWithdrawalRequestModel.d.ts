import { Currency } from './Currency';
export declare class CreateWithdrawalRequestModel {
    'amount': number;
    'currency': Currency;
    'address': string;
    'twoFactorCode': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CreateWithdrawalRequestModel;
}
