import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
export declare class FundAssetsState {
    'assets'?: [FundAssetPartWithIcon];
    'otherPercent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetsState): FundAssetsState;
}
