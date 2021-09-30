import { AssetInfo } from './AssetInfo';
import { AssetProvider } from './AssetProvider';
import { ProfitChart } from './ProfitChart';

export interface CoinsAsset {
    id: string;
    name: string;
    asset: string;
    description: string;
    logoUrl: string;
    color: string;
    url: string;
    provider: AssetProvider;
    price: number;
    change24Percent: number;
    totalVolume: number;
    marketCap: number;
    details: AssetInfo;
    chart: ProfitChart;
    amount: number;
    averagePrice: number;
    profitCurrent: number;
}

