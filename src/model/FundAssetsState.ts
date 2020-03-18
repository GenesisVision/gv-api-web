import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';

export interface FundAssetsState {
    date: Date;
    value: number;
    assets: Array<FundAssetPartWithIcon>;
}

