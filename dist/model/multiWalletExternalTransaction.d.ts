import { Currency } from './currency';
import { MultiWalletExternalTransactionType } from './multiWalletExternalTransactionType';
export declare class MultiWalletExternalTransaction {
    'id'?: string;
    'currency'?: Currency;
    'logo'?: string;
    'date'?: Date;
    'amount'?: number;
    'type'?: MultiWalletExternalTransactionType;
    'status'?: string;
    'isEnableActions'?: boolean;
    'statusUrl'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MultiWalletExternalTransaction): MultiWalletExternalTransaction;
}
