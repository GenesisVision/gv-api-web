import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';

export interface TradingAccountDetails {
    id: string;
    currency: Currency;
    login: string;
    apiKey: string;
    asset: AssetDetails;
}

