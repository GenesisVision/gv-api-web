import { AssetType } from './AssetType';
import { ChangeState } from './ChangeState';
import { Currency } from './Currency';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface PostAssetDetailsWithPrices {
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
    price: number;
    priceCurrency: Currency;
    change24Percent: number;
    changeState: ChangeState;
}

