import { AssetProvider } from './AssetProvider';

export interface PlatformAsset {
    id: string;
    name: string;
    asset: string;
    description: string;
    logoUrl: string;
    color: string;
    url: string;
    provider: AssetProvider;
    mandatoryFundPercent: number;
}

