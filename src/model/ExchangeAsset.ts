import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';
import { DashboardTradingAssetCredentials } from './DashboardTradingAssetCredentials';

export interface ExchangeAsset {
    title: string;
    creationDate: Date;
    balance: number;
    currency: Currency;
    credentials: DashboardTradingAssetCredentials;
    asset: AssetDetails;
}

