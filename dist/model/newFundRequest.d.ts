import { FundAssetPart } from './fundAssetPart';
export declare class NewFundRequest {
    'exitFee'?: number;
    'assets'?: [FundAssetPart];
    'entryFee'?: number;
    'depositAmount'?: number;
    'depositWalletId'?: string;
    'title'?: string;
    'description'?: string;
    'logo'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NewFundRequest): NewFundRequest;
}
