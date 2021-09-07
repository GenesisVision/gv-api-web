import { AssetInfo } from './AssetInfo';
import { AssetProvider } from './AssetProvider';
import { TickerChart } from './TickerChart';

export interface PlatformCoinAsset {
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
    change24Volume: number;
    marketCap: number;
    details: AssetInfo;
    chart: TickerChart;
}

