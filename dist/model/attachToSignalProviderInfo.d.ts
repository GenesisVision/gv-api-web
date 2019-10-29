import { Currency } from './currency';
export declare class AttachToSignalProviderInfo {
    'hasSignalAccount'?: boolean;
    'hasActiveSubscription'?: boolean;
    'volumeFee'?: number;
    'minDeposit'?: number;
    'minDepositCurrency'?: Currency;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AttachToSignalProviderInfo): AttachToSignalProviderInfo;
}
