import { FundAssetInfo } from './FundAssetInfo';
export declare class FundAssetsListInfo {
    'assets'?: Array<FundAssetInfo>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetsListInfo): FundAssetsListInfo;
}
