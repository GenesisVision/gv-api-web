import { Currency } from './Currency';
export declare class CreateWithdrawalRequestModel {
    'amount'?: number;
    'currency'?: Currency;
    'address'?: string;
    'twoFactorCode'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CreateWithdrawalRequestModel): CreateWithdrawalRequestModel;
}
