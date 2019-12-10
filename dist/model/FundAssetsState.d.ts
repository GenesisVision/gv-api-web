import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
export declare class FundAssetsState {
    'date': number;
    'value': number;
    'assets': Array<FundAssetPartWithIcon>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetsState | undefined;
}
