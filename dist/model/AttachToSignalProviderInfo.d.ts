import { Currency } from './Currency';
export declare class AttachToSignalProviderInfo {
    'hasSignalAccount'?: boolean;
    'hasActiveSubscription'?: boolean;
    'volumeFee'?: number;
    'minDeposit'?: number;
    'minDepositCurrency'?: Currency;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AttachToSignalProviderInfo): AttachToSignalProviderInfo;
}
