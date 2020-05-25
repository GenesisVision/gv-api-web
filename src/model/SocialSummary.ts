import { AssetDetails } from './AssetDetails';
import { PlatformAsset } from './PlatformAsset';
import { TrendHashTag } from './TrendHashTag';

export interface SocialSummary {
    trendHashTags: Array<TrendHashTag>;
    trendAssets: Array<AssetDetails>;
    trendPlatformAssets: Array<PlatformAsset>;
}

