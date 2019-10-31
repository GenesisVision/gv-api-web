import { Currency } from './Currency';
import { MultiWalletExternalTransactionType } from './MultiWalletExternalTransactionType';
export declare class MultiWalletExternalTransaction {
    'id': string;
    'currency': Currency;
    'logo': string;
    'date': Date;
    'amount': number;
    'type': MultiWalletExternalTransactionType;
    'status': string;
    'isEnableActions': boolean;
    'statusUrl': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MultiWalletExternalTransaction;
}
