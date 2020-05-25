import { PlatformAsset } from './PlatformAsset';
import { SocialSummaryHashTag } from './SocialSummaryHashTag';
import { SocialSummaryStrategy } from './SocialSummaryStrategy';

export interface SocialSummary {
    hotTopics: Array<SocialSummaryHashTag>;
    topStrategies: Array<SocialSummaryStrategy>;
    topAssets: Array<PlatformAsset>;
}

