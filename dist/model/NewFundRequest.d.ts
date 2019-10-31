import { FundAssetPart } from './FundAssetPart';
export declare class NewFundRequest {
    'exitFee': number;
    'assets': Array<FundAssetPart>;
    'entryFee': number;
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
    }): NewFundRequest;
}
