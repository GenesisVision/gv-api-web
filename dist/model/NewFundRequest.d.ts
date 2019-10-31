import { FundAssetPart } from './FundAssetPart';
export declare class NewFundRequest {
    'assets': Array<FundAssetPart>;
    'entryFee': number;
    'exitFee': number;
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
    }): NewFundRequest | undefined;
}
