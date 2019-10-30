import { Currency } from './currency';
export declare class CreateWithdrawalRequestModel {
    'amount'?: number;
    'currency'?: Currency;
    'address'?: string;
    'twoFactorCode'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CreateWithdrawalRequestModel): CreateWithdrawalRequestModel;
}
