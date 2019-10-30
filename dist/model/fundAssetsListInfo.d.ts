import { FundAssetInfo } from './fundAssetInfo';
export declare class FundAssetsListInfo {
    'assets'?: Array<FundAssetInfo>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetsListInfo): FundAssetsListInfo;
}
