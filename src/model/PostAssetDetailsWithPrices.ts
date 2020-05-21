import { AssetType } from './AssetType';
import { Currency } from './Currency';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface PostAssetDetailsWithPrices {
    price: number;
    priceCurrency: Currency;
    change24Percent: number;
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
}

