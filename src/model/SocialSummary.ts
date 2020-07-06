import { SocialPostPlatformAsset } from './SocialPostPlatformAsset';
import { SocialSummaryHashTag } from './SocialSummaryHashTag';
import { SocialSummaryStrategy } from './SocialSummaryStrategy';

export interface SocialSummary {
    hotTopics: Array<SocialSummaryHashTag>;
    topStrategies: Array<SocialSummaryStrategy>;
    topAssets: Array<SocialPostPlatformAsset>;
}

