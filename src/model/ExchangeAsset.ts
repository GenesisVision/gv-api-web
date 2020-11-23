import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';

export interface ExchangeAsset {
    id: string;
    title: string;
    creationDate: Date;
    balance: number;
    currency: Currency;
    asset: AssetDetails;
}

