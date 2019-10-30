import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
export declare class FundAssetsState {
    'assets'?: Array<FundAssetPartWithIcon>;
    'otherPercent'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetsState): FundAssetsState;
}
