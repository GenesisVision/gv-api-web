import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
export declare class FundAssetsState {
    'assets': Array<FundAssetPartWithIcon>;
    'otherPercent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetsState | undefined;
}
