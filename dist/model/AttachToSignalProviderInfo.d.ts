import { Currency } from './Currency';
export declare class AttachToSignalProviderInfo {
    'hasSignalAccount': boolean;
    'hasActiveSubscription': boolean;
    'volumeFee': number;
    'minDeposit': number;
    'minDepositCurrency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AttachToSignalProviderInfo | undefined;
}
