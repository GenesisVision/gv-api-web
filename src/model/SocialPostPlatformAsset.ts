import { AssetProvider } from './AssetProvider';
import { ChangeState } from './ChangeState';
import { Currency } from './Currency';
import { SimpleChartPoint } from './SimpleChartPoint';

export interface SocialPostPlatformAsset {
    price: number;
    priceCurrency: Currency;
    change24Percent: number;
    changeState: ChangeState;
    chart: Array<SimpleChartPoint>;
    id: string;
    name: string;
    asset: string;
    description: string;
    logoUrl: string;
    color: string;
    url: string;
    provider: AssetProvider;
}

