import { FundAssetInfo } from './FundAssetInfo';
export declare class FundAssetsListInfo {
    'assets': Array<FundAssetInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetsListInfo | undefined;
}
