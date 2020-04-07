import { AssetDetails } from './AssetDetails';
import { PlatformAsset } from './PlatformAsset';

export interface SocialSummary {
    trendHashTags: Array<string>;
    trendAssets: Array<AssetDetails>;
    trendPlatformAssets: Array<PlatformAsset>;
}

