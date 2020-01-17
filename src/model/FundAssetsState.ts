import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';

export interface FundAssetsState {
    date: number;
    value: number;
    assets: Array<FundAssetPartWithIcon>;
}

