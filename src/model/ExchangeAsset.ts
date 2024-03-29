import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { TradingAccountPermission } from './TradingAccountPermission';

export interface ExchangeAsset {
    id: string;
    title: string;
    creationDate: Date;
    balance: number;
    currency: Currency;
    permissions: Array<TradingAccountPermission>;
    asset: AssetDetails;
    status: DashboardTradingAssetStatus;
}

